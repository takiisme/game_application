import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Put,
    Res,
    ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { DlcRating } from 'src/entities/dlcRating.entity';
import { DlcRatingService } from './dlcRating.service';

@Controller('dlc_rating')
export class DlcRatingController
{
    constructor(
        private readonly dlcRatingService : DlcRatingService
    ) {}

    @Post('add')
    async GetDlcRating(
        @Body() dlcRatingInfo: DlcRating,
        @Res() response: Response
    ) {
        const {success, message} = await this.dlcRatingService.AddDlcRating(dlcRatingInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
    }

    @Get('getall')
    async GetAllDlcRating() {
        return this.dlcRatingService.GetAllDlcRating();
    }

    @Get('get/:Id')
    async GetDlcRatingByUserId(@Param('Id') Id: string) {
        return this.dlcRatingService.GetDlcRatingByUserId(Id);
    }

    @Get('get/:Id')
    async GetDlcRatingByDlcId(@Param('Id') Id: string) {
        return this.dlcRatingService.GetDlcRatingByDlcId(Id);
    }

    @Put('update')
    async UpdateDlcRating(
        @Body() dlcRatingInfo: DlcRating,
        @Res() response: Response
    ) {
        const {success, message} = await this.dlcRatingService.UpdateDlcRating(dlcRatingInfo);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }

    @Delete('delete')
    async DeleteDlcRating(
        @Body() dlcRatingInfo: DlcRating,
        @Res() response: Response
    ) {
        const {success, message} = await this.dlcRatingService.RemoveDlcRating(dlcRatingInfo.userId, dlcRatingInfo.dlcId);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}