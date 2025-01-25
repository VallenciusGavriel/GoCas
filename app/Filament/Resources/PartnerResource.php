<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PartnerResource\Pages;
use App\Filament\Resources\PartnerResource\RelationManagers;
use App\Models\Partner;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\BelongsToColumn;

class PartnerResource extends Resource
{
    protected static ?string $model = Partner::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(100),
                FileUpload::make('image_url')
                    ->label('Image')
                    ->disk('public')
                    ->directory('images/partners')
                    ->visibility('public')
                    ->image()
                    ->required(),
                Select::make('category_id')
                    ->label('Category')
                    ->options(\App\Models\PartnerCategory::query()->pluck('name', 'id'))
                    ->searchable()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('category_name')
                    ->label('Category')
                    ->searchable()
                    ->sortable(),

                ImageColumn::make('image_url')
                    ->label('Image')
                    ->disk('public')
                    ->getStateUsing(function ($record) {
                        return asset('storage/' . $record->imageUrl);
                    })
                    ->extraAttributes([
                        'style' => 'object-fit: cover; object-position: center;',
                        'class' => 'ring-2 ring-white dark:ring-gray-900',
                    ])
                    ->circular(),
            ])
            ->filters([
                // You can add filters here if needed, such as filtering by categories
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPartners::route('/'),
            'create' => Pages\CreatePartner::route('/create'),
            'edit' => Pages\EditPartner::route('/{record}/edit'),
        ];
    }
}
