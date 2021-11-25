<?php

namespace App\Controllers;

class Instagram extends BaseController
{
    public function __construct()
    {
        $this->client = \Config\Services::curlrequest();
    }
    public function index()
    {    //         ['auth' => ['access_token', 'IGQVJXb09sWU9Demx6SVBHUVd1V2FpRGhaN3kxTEU3QlR5bHNWMDdqQWhRc3JvQ1V4YUo0Q1hWUVlMQWlhWml1bXRpUmlrUklVeUoxOFg2NmN1SjZAtVDFYakQ2MGhORFhCRGw1aGRB'],
    // ['fields', 'username']]);
        $response = $this->client->request(
            'GET', 'https://graph.instagram.com/17841445490064128',
            ['query' => ['access_token' => 'IGQVJXb09sWU9Demx6SVBHUVd1V2FpRGhaN3kxTEU3QlR5bHNWMDdqQWhRc3JvQ1V4YUo0Q1hWUVlMQWlhWml1bXRpUmlrUklVeUoxOFg2NmN1SjZAtVDFYakQ2MGhORFhCRGw1aGRB'],
            ['fields'=> 'username']] );
        echo $response->getBody();
$data = [
    'title' => 'Instagram',
    'datainstagram' => $response->getBody(),
];
        return view('konten/instagram.php');
    }
    
}
