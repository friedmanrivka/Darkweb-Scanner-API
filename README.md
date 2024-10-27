# Darkweb Scanner API
## Overview
The Darkweb Scanner API allows users to search for domain-related data on the dark web using the IntelX API. It includes endpoints for initiating a search and retrieving search results.
## Setup
### 1.Clone the Repository:    
git clone https://github.com/friedmanrivka/Darkweb-Scanner-API.git
cd <repository-directory>
### 2.Install Dependencies: 

npm install

### 3. Environment Variables:
   To use this API, you need an IntelX account. 
   <br>
   1. **Create an Account on IntelX**: 
   <br>
   Sign up at [IntelX](https://intelx.io) and obtain your API Key.  
   <br>
   2. **Configure Environment Variables**:    
   <br>
    Add your **IntelX API Key** and **Base URL** to a `.env` file in the project’s root directory.
   <br>
  Example `.env` file: 
   <br>
   INTELX_BASE_URL=your_intelx_base_url  
   <br>
   INTELX_API_KEY=your_intelx_api_key

### 4. Start the Server
  Run the server with the following command:    
  <br>
node app.js

## API Endpoints

### 1. Initiate Search
#### Endpoint: 
POST /search
#### Description: 
Initiates a search for a specified domain.
#### Request Body:
json
Copy code
{
  "domain": "yourdomain.com"
}
Response: Returns a search id if successful.
### 2. Get Search Result
#### Endpoint: 
GET /search/result
#### Description: 
Retrieves the search results based on the provided id.
#### Query Parameter:
id (The unique search ID, a 24-character hex string or a 36-character UUID)
#### Response:
Returns search data or an error message if id is invalid.
