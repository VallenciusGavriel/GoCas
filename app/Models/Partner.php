<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'partners';

    protected $fillable = ['name', 'image_url', 'category_id'];

    public function category()
    {
        return $this->belongsTo(\App\Models\PartnerCategory::class, 'category_id');
    }

    public function getCategoryNameAttribute()
    {
        return $this->category ? $this->category->name : 'No Category';
    }

    public function getImageUrlAttribute($value)
    {
        return "/storage/{$value}";
    }
}
