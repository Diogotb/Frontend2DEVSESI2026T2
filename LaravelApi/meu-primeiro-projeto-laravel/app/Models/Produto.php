<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    //clase de PRodutos

    //
    protected $fillable = ["nome", "descricao", "preco", "quantidade" ];

}
