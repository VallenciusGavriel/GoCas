<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Bikin user dummy
        User::create([
            'name' => 'admin',
            'email' => 'admin@gocas.co.id',
            'password' => Hash::make('password')
        ]);
    }
}
