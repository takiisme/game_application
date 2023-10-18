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
        @Body() dlcRatingInfo: DlcRating
    ) {
        return this.dlcRatingService.AddDlcRating(dlcRatingInfo);
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
        @Body() dlcRatingInfo: DlcRating
    ) {
        return this.dlcRatingService.UpdateDlcRating(dlcRatingInfo);
    }

    @Delete('delete')
    async DeleteDlcRating(
        @Body() dlcRatingInfo: DlcRating
    ) {
        return this.dlcRatingService.RemoveDlcRating(dlcRatingInfo.userId, dlcRatingInfo.dlcId);
    }
}