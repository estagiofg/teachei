<?php
   namespace App\Mvc;
   class Controller
   {
      public function index()
      {
         $model = new Model;
         $view = new View;
         $view->render($model->getText());
      }
   }