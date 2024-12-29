<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class StartSsr extends Command
{
    protected $signature = 'inertia:start-ssr';
    protected $description = 'Start the Inertia SSR service';

    public function handle()
    {
        $this->info('Starting Inertia SSR...');
        exec('php artisan inertia:start-ssr', $output, $returnVar);

        if ($returnVar !== 0) {
            $this->error('Failed to start Inertia SSR.');
        } else {
            $this->info(implode("\n", $output));
        }
    }
}
