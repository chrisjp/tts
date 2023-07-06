<?php

namespace ChrisJP\TTS;

/**
 * The Request class handles the sending and receiving of API requests using cURL methods.
 * 
 */
class Request
{

    /**
     * The base URL to connect to
     *
     * @var string
     */
    private string $baseURL;

    /**
     * Number of seconds after which to timeout the request
     * By default cURL requests never timeout. Here, the default is set to 30 seconds.
     * This can be overridden via the constructor.
     *
     * @var integer
     */
    private int $timeout = 30;

    /**
     * Stores the output from curl_getinfo()
     *
     * @var array
     */
    private array $info;

    /**
     * Stores the output from curl_exec()
     *
     * @var string
     */
    private string $response;

    public function __construct(string $baseURL, int $timeout = 30)
    {
        $this->baseURL = $baseURL;
        $this->timeout = $timeout;
    }

    /**
     * Set up a cURL session and execute the request
     * If no parameters are passed to this a simple GET will be performed on the URL
     *
     * @param string $payload
     * @param boolean $post
     * @param array|null $headers
     * @param boolean $headerInOutput
     * @return $this
     */
    public function sendRequest(array|string $payload = '', bool $post = true, array|null $headers = [], bool $headerInOutput = false)
    {
        // The data being sent with this request needs to be a string
        // If an array has been passed use http_build_query() to generate a URL-encoded query string
        $payload = is_array($payload) ? http_build_query($payload) : $payload;

        // Initialise cURL session
        $ch = curl_init();

        // Set base URL to send request to, appending our payload as a query string if this is a GET
        $url = $post ? $this->baseURL : $this->baseURL . $payload;
        curl_setopt($ch, CURLOPT_URL, $url);

        // If a POST request, add the payload
        if ($post) {
            curl_setopt($ch, CURLOPT_POST, $post);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        }

        // Return data from the URL rather than output it
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // When to timeout
        curl_setopt($ch, CURLOPT_TIMEOUT, $this->timeout);

        // Send headers with this request
        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        }

        // Show header in output
        // This is not typically needed so defaults to false,
        // but would be required if for example you need to extract cookie values
        curl_setopt($ch, CURLOPT_HEADER, $headerInOutput);

        // Execute the request
        // Store the response and information associated with the transfer
        $this->response = curl_exec($ch);
        $this->info = curl_getinfo($ch);
        
        // Close the session to free resources
        curl_close($ch);

        return $this;
    }

    /**
     * Get the output from curl_exec()
     *
     * @return string
     */
    public function getResponse(): string
    {
        return $this->response;
    }

    /**
     * Get the output from curl_exec() in JSON format
     *
     * @return string
     */
    public function getJSONResponse(): string
    {
        return json_encode($this->response);
    }

    /**
     * Get information associated with the curl_exec() response
     * This can be useful if needing to check the HTTP status code
     *
     * @return array
     */
    public function getInfo(): array
    {
        return $this->info;
    }
}
