<?php

namespace eze\Http\Controllers;

use Illuminate\Http\Request;

class SettingController extends Controller
{
	
    public function privacy()
    {
    	return view('privacy');
    }

    public function terms()
    {
    	return view('terms');
    }    

    public function aboutus()
    {
    	return view('aboutus');
    }

}
