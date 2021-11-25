<?php

namespace App\Controllers;

class Instagram extends BaseController
{
    public function __construct()
    {
        $this->client = \Config\Services::curlrequest([
    'baseURI' => 'https://graph.instagram.com/17841445490064128',
]);
    }
    public function index()
    {
        $response = $this->client->get('/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJXb09sWU9Demx6SVBHUVd1V2FpRGhaN3kxTEU3QlR5bHNWMDdqQWhRc3JvQ1V4YUo0Q1hWUVlMQWlhWml1bXRpUmlrUklVeUoxOFg2NmN1SjZAtVDFYakQ2MGhORFhCRGw1aGRB');
        $datainstagram = json_decode($response->getBody()->getContents(), true);
$data = [
    'title' => 'Instagram',
    'datainstagram' => $datainstagram,
];
        return view('konten/instagram.php');
    }
    
}
