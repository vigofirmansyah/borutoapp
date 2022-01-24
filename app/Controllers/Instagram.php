<?php

namespace App\Controllers;

use Config\View;

// use CodeIgniter\I18n\Time;
class Instagram extends BaseController
{
    public function __construct()
    {
        // $this->time = new Time('now');
        $this->client = \Config\Services::curlrequest(
            [
                'base_url' => 'https://graph.instagram.com',
            ]
        );
        $this->access_token = 'IGQVJXNzZAQRWJuU213TFJvN1RxWnRjUUdrUW5vOUFiN29NUnd4R3k1MmNBWUNUZAWtmOEt2VlQ5YkxNY1JEVHhNb1ctOVFIQlhLTFAtMHhmdTVNN25NbkxSTVR1RkZAPbFZARcFFyUmF3';
        $this->user_id = '17841445490064128';
    }
    public function getApi($url = null)
    {
        // if($url == 'user_profile'){
        //     $url = $this->user_id.'?fields='.$this->user_fields;
        // }
        // if($url == 'user_media'){
        //     $url = $this->user_id.'/media?fields='.$this->media_fields;
        // }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://graph.instagram.com/' . $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        $result = json_decode($result, true);
        return $result;
    }
    public function showProfile()
    {
        $profile_fields = 'account_type,id,media_count,username';
        $url = $this->user_id . '?fields=' . $profile_fields . '&access_token=' . $this->access_token;
        $profile = $this->getApi($url);
        return $profile;
    }
    public function showMedia($pagination = null)
    {
        $media_fields = 'id,media_type,media_url,permalink,thumbnail_url,timestamp,username,caption';
        $url = $this->user_id . '/media?fields=' . $media_fields . $pagination . '&access_token=' . $this->access_token;
        $media = $this->getApi($url);
        return $media;
    }
    public function test($test = null)
    {
        $test2 = $test;
        $data = [
            'test' => $test2
        ];
        return view('test', $data);
    }
    public function halaman($keterangan = null, $code = null)
    {
        $limit = 24;
        $pagination = '&limit=' . $limit;
        if ($keterangan == 'before') {
            $pagination .= '&before=' . $code;
        } elseif ($keterangan == 'after') {
            $pagination .= '&after=' . $code;
        } else {
            $pagination = null;
        }
        $media = $this->showMedia($pagination);
        // dd($media);
        // $data = null;
        $data = [
            'title' => 'Instagram',
            'profile' => $this->showProfile(),
            'media' => $media,
            // 'limit' => $limit,
        ];

        return view('konten/instagram', $data);
    }
    public function index()

    {
        $limit = 24;
        $pagination = '&limit=' . $limit;
        $data = [
            'title' => 'Instagram',
            'profile' => $this->showProfile(),
            'media' => $this->showMedia($pagination),
            // 'limit' => $limit
        ];
        // dd($data);
        return view('konten/instagram', $data);
    }
}
