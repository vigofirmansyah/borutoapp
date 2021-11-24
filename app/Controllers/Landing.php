<?php

namespace App\Controllers;

class Landing extends BaseController
{
    public function index()
    {
//         $client = \Config\Services::curlrequest();
//         $response = $client->request('GET', 'https://api.instagram.com/oauth/authorize', [
//     'client_id' => ['1548824348807300'],
//     'redirect_uri' => ['https://borutoaja.com/landing'],
//     'response_type' => ['code'],
//     'scope' => ['user_profile', 'user_media']
// ]);
        return view('landing/index.php');
    }
}
