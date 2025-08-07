<?php

namespace App\Filament\Resources\KpResource\Pages;

use App\Filament\Resources\KpResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditKp extends EditRecord
{
    protected static string $resource = KpResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
