<?php

namespace App\Controllers;

class Instagram extends BaseController
{
    public function __construct()
    {
        $this->client = \Config\Services::curlrequest(
            [
                'base_url'=>'https://graph.instagram.com',
            ]
        );
        $this->access_token ='IGQVJXb09sWU9Demx6SVBHUVd1V2FpRGhaN3kxTEU3QlR5bHNWMDdqQWhRc3JvQ1V4YUo0Q1hWUVlMQWlhWml1bXRpUmlrUklVeUoxOFg2NmN1SjZAtVDFYakQ2MGhORFhCRGw1aGRB' ;
        $this->user_id = '17841445490064128';
    }
    public function getUser()
    {     $userid = $this->user_id; 
        $token = $this->access_token;
        //  $response_user = $this->client->get($this->user_id, ['query' => ['access_token' => $this->access_token],
        //     ['fields'=> 'account_type,id,media_count,username']]); 
        $response = $this->client->get('/'.$userid.'?access_token='.$token.'&fields=username');
        return $response->getBody();   
        // $response = $this->client->request('GET', 'https://graph.instagram.com/17841445490064128', ['query' => ['access_token' => $this->access_token],
        //     ['fields'=> 'account_type,id,media_count,username']]); 
        // return $response->getBody();
    }


    public function index()
    {   
        // $response = $this->client->request(
        //     'GET', 'https://graph.instagram.com/17841445490064128',
        //     ['query' => ['access_token' => 'IGQVJXb09sWU9Demx6SVBHUVd1V2FpRGhaN3kxTEU3QlR5bHNWMDdqQWhRc3JvQ1V4YUo0Q1hWUVlMQWlhWml1bXRpUmlrUklVeUoxOFg2NmN1SjZAtVDFYakQ2MGhORFhCRGw1aGRB'],
        //     ['fields'=> 'username']] );
$data = [
    'title' => 'Instagram',
    'datainstagram' => $this->getUser()
];
        return view('konten/instagram.php');
    }
    
}
