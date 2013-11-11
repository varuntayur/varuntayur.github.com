package foo;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import javax.ws.rs.core.MediaType;

import org.json.JSONException;
import org.json.JSONObject;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class RestSky {

    /*
     * Step 1: Get the ACCESS_TOKEN from this URL below
     * https://login.live.com/oauth20_authorize.srf?client_id=00000000400D3363&scope=wl.skydrive,wl.skydrive_update&response_type=token&redirect_uri=https://login.live.com/oauth20_desktop.srf
     */

    private static final Client client = Client.create();
    private static final String ACCESS_TOKEN = "EwBAAq1DBAAUGCCXc8wU/zFu9QnLdZXy%2bYnElFkAAb7E7M4WONXhLx5aK2l6JYaUgsrHbxehqdlJnyoKsIJqatFGF5PUE4v3WwvHGsd7U86G8zcGpEbqjmdpon1rkrNBVX3/tkskUD6UJLFFKjmDJMytMse5Serl1wygRFSOt7mPHCerr2BZM5byEyjS4KScekGVqRzeIxG/jEJgf%2bPYHLImVHPSE8Xj08FxfYPmZdJAZdKwa/XrLA3%2b4c1R8VxrvRIG3QrNDxoEjgJ9oKVIpqpM%2bTxihtBtaHjH1XfrJByKiYZXzSz2/FzvDI3qpIfOSK0u%2b0RL65yTS6ifLwo1w3zNsBTo6b8bX8QjFr/W2XVTnQhJwjUlD70dpGDS3XgDZgAACMGTXZKNjBQ2EAFgy0g4PYw2vWwGUJutEO5TTtgRxhzJxWasSinyULRq7KCPNfTKM22kQ82GFp2c8VNYDVtEUrSDDa19mB3OEtPEijaiwmuGIlqZvzFnPwaSbTZOQOyqyTx5P2uIiXYDB2uiiCLwVSVa4APZVinmUet5MD/7gJctjcDZF2Ds5uh1MS9WqaE7IUnx/GO8nWjhkZcH8iWBL1yg9HxzNFrabe0RlPdp22uXhbY5eFzkwADUUSb4cv7O9HkLJQNHcW/b4%2bZgoO37v11mk0Rv5aglmHqIp620BFS6MERa3LRJ4g1IlYIPpx7j13cogAI6rfTw1uep7zrS3lmJx5%2benQU1yF66dI7lZT45Eh8NFIFFVJlCDgAA&authentication_token=eyJhbGciOiJIUzI1NiIsImtpZCI6IjAiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOjEsImlzcyI6InVybjp3aW5kb3dzOmxpdmVpZCIsImV4cCI6MTM3MTAyOTAxMSwidWlkIjoiY2JkZGYyZTYwZTkwNjVkMjM3YTFlNzNiOTU2MzkzOTkiLCJhdWQiOiJ0YXl1ci5pbiIsInVybjptaWNyb3NvZnQ6YXBwdXJpIjoiYXBwaWQ6Ly8wMDAwMDAwMDQwMEQzMzYzIiwidXJuOm1pY3Jvc29mdDphcHBpZCI6IjAwMDAwMDAwNDAwRDMzNjMifQ.seYkHjsd9keBgaL5XC-4K9L_dcenrgHLjV6fUfP1fi0";

    public static void main(String[] args) {
        try {
            
            System.out.println("------Attempting to create a folder----------");
            String folderId = createFolder();

            System.out.println("------Attempting to list all albums----------");
            listAlbums();

            System.out.println("------Attempting to list all details of an album ----------");
            listDetailsOfAlbum();

            System.out.println("------Attempting to list all file in a folder----------");
            listFilesInFolder();
            
            System.out.println("------Attempting to get the quota a file----------");
            getQuota();
            
            System.out.println("------Attempting to upload a file----------");
            String fileId = uploadFile();
            
            System.out.println("------Attempting to delete a file----------");
            deleteFile(fileId);

            System.out.println("------Attempting to delete a folder----------");
            deleteFolder(folderId);


        } catch (Exception e) {

            e.printStackTrace();

        }
    }

    private static void getQuota() {
        WebResource webResource = client
                .resource("https://apis.live.net/v5.0/me/skydrive/quota?access_token="
                        + ACCESS_TOKEN);

        ClientResponse response = webResource
                .accept(MediaType.APPLICATION_JSON).get(ClientResponse.class);

       String output=  printResponse(response);
        
        try {
            JSONObject json = new JSONObject(output);
            System.out.println("Quota on server:" + Long.valueOf(json.get("quota").toString())/(1024 * 1024) + "MB");
            System.out.println("Available space on server:" + Long.valueOf(json.get("available").toString())/(1024 * 1024) +  "MB");
        } catch (JSONException e) {
            e.printStackTrace();
        } 

    }

    private static String uploadFile() throws IOException {

        final String BOUNDARY_STRING = "3i2ndDfv2rTHiSisAbouNdArYfORhtTPEefj3q2f";

        URL connectURL = new URL(
                "https://apis.live.net/v5.0/folder.60a8b957c6429b7c/files?"
                        + "state=MyNewFileState&redirect_uri=https://login.live.com/oauth20_desktop.srf"
                        + "&access_token=" + ACCESS_TOKEN);
        HttpURLConnection conn = (HttpURLConnection) connectURL
                .openConnection();

        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type",
                "multipart/form-data; boundary=" + BOUNDARY_STRING);
        // set read & write
        conn.setDoInput(true);
        conn.setDoOutput(true);
        conn.setUseCaches(false);

        conn.setRequestProperty("Connection", "Keep-Alive");

        conn.connect();

        // set body

        DataOutputStream dos = new DataOutputStream(conn.getOutputStream());
        dos.writeBytes("--" + BOUNDARY_STRING + "\r\n");
        dos.writeBytes("Content-Disposition: form-data; name=\"file\"; filename=\""
                + URLEncoder.encode("suservice.log", "UTF-8") + "\"\r\n");
        dos.writeBytes("Content-Type: application/octet-stream\r\n");
        dos.writeBytes("\r\n");

        FileInputStream fileInputStream = new FileInputStream(new File(
                "c:/SUService.log"));
        int fileSize = fileInputStream.available();
        int maxBufferSize = 8 * 1024;
        int bufferSize = Math.min(fileSize, maxBufferSize);
        byte[] buffer = new byte[bufferSize];

        // send file
        int bytesRead = fileInputStream.read(buffer, 0, bufferSize);
        while (bytesRead > 0) {

            // Upload file part(s)
            dos.write(buffer, 0, bytesRead);

            int bytesAvailable = fileInputStream.available();
            bufferSize = Math.min(bytesAvailable, buffer.length);
            bytesRead = fileInputStream.read(buffer, 0, bufferSize);
        }
        fileInputStream.close();
        // send file end

        dos.writeBytes("\r\n");
        dos.writeBytes("--" + BOUNDARY_STRING + "--\r\n");

        dos.flush();

        BufferedReader reader = new BufferedReader(new InputStreamReader(
                conn.getInputStream()));
        String line = null;
        StringBuilder sbuilder = new StringBuilder();
        while ((line = reader.readLine()) != null) {
            sbuilder.append(line);
            System.out.println(line);
        }
        
        String fileId = null;
        try {
            JSONObject json = new JSONObject(sbuilder.toString());
            fileId = json.get("id").toString();
            System.out.println("File ID is :" + fileId);
            System.out.println("File name is :" + json.get("name"));
            System.out.println("File source is :" + json.get("source"));
        } catch (JSONException e) {
            e.printStackTrace();
        }        
        
        return fileId;

    }
    
    private static void deleteFile(String fileId) {
     // delete a folder
        WebResource webResource = client
                .resource("https://apis.live.net/v5.0/" + fileId + "/?access_token="
                        + ACCESS_TOKEN);

        System.out.println(webResource.getURI());
        
        ClientResponse response = webResource.delete(ClientResponse.class);

        printResponse(response);
        
    }


    private static void deleteFolder(String folderId) {
        // delete a folder
        WebResource webResource = client
                .resource("https://apis.live.net/v5.0/"+ folderId +"/?access_token="
                        + ACCESS_TOKEN);

        ClientResponse response = webResource.delete(ClientResponse.class);

        printResponse(response);
    }

    private static String createFolder() {
        // create a folder
        WebResource webResource = client
                .resource("https://apis.live.net/v5.0/me/albums?access_token="
                        + ACCESS_TOKEN);

        String folderName = "{\"name\":\"Informative Spreadsheets\",\"description\":\"A folder full of useful data visualizations.\"}";

        ClientResponse response = webResource.type(MediaType.APPLICATION_JSON)
                .post(ClientResponse.class, folderName);

        String output = printResponse(response);
        String folderId = null;
        try {
            JSONObject json = new JSONObject(output);
            folderId = json.get("id").toString();
            System.out.println(folderId);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        
        return folderId;

    }

    private static void listFilesInFolder() {
        // list of albums
        WebResource webResource = client
                .resource("https://apis.live.net/v5.0/folder.60a8b957c6429b7c.60A8B957C6429B7C!1193/files?access_token="
                        + ACCESS_TOKEN);

        ClientResponse response = webResource
                .accept(MediaType.APPLICATION_JSON).get(ClientResponse.class);

        printResponse(response);

    }

    private static void listDetailsOfAlbum() {
        // list of albums
        WebResource webResource = client
                .resource("https://apis.live.net/v5.0/folder.60a8b957c6429b7c.60A8B957C6429B7C!1193?access_token="
                        + ACCESS_TOKEN);

        ClientResponse response = webResource
                .accept(MediaType.APPLICATION_JSON).get(ClientResponse.class);

        printResponse(response);

    }

    private static void listAlbums() {
        // list of albums
        WebResource webResource = client
                .resource("https://apis.live.net/v5.0/me/albums?access_token="
                        + ACCESS_TOKEN);

        ClientResponse response = webResource
                .accept(MediaType.APPLICATION_JSON).get(ClientResponse.class);

       String output = printResponse(response);

        try {
            JSONObject json = new JSONObject(output);
            System.out.println(json.get("data"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
       

    }

    private static String printResponse(ClientResponse response) {
        if (response.getStatus() == 201) {
            System.out.println("Created folder..");
        }
        
        else if (response.getStatus() == 204) {
            System.out.println("Delete operation successful..");
            return "204";
        }

        else if (response.getStatus() != 200) {
            throw new RuntimeException("Failed : HTTP error code : "
                    + response.getStatus());
        }

        System.out.println("Output from Server .... \n");
        String output = response.getEntity(String.class);
        System.out.println(output);
        
        return output;

    }
}
