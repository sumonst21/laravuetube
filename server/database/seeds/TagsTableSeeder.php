<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->insert([
            'name' => "ES2015",
        ]);

        DB::table('tags')->insert([
            'name' => "JavaScript",
        ]);

        DB::table('tags')->insert([
            'name' => "ES2016",
        ]);

        DB::table('tags')->insert([
            'name' => "Promises",
        ]);
    }
}
