###### Darkweb Scanner API
#### OverviewThe Darkweb Scanner API allows users to search for domain-related data on the dark web using the IntelX API. It includes endpoints for initiating a search and retrieving search results.
#### Setup
### 1.Clone the Repository:    
git clone https://github.com/friedmanrivka/Darkweb-Scanner-API.git
cd <repository-directory>
### 2.Install Dependencies: 

npm install

### 3. Environment Variables:
   To use this API, you need an IntelX account. 
   1. **Create an Account on IntelX**: Sign up at [IntelX](https://intelx.io) and obtain your API Key.   2. **Configure Environment Variables**:       - Add your **IntelX API Key** and **Base URL** to a `.env` file in the project’s root directory.
   Example `.env` file:   ```plaintext   PORT=3000   INTELX_BASE_URL=your_intelx_base_url   INTELX_API_KEY=your_intelx_api_key

### 4. Start the Server
  Run the server with the following command:     npm start

#### API Endpoints
### 1. Initiate Search
Endpoint: POST /search
Description: Initiates a search for a specified domain.
Request Body:
json
Copy code
{
  "domain": "example.com"
}
Response: Returns a search id if successful.
### 2. Get Search Result
Endpoint: GET /search/result
Description: Retrieves the search results based on the provided id.
Query Parameter: id (The unique search ID, a 24-character hex string or a 36-character UUID)
Response: Returns search data or an error message if id is invalid.