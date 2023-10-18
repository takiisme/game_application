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
import { Dlc } from 'src/entities/dlc.entity';
import { DlcService } from './dlc.service';

@Controller('dlc')
export class DlcController
{
    constructor(
        private readonly dlcService : DlcService
    ) {}

    @Post('add')
    async AddDlc(
        @Body() dlcInfo: Dlc
    ) {
        return this.dlcService.AddDlc(dlcInfo);
    }

    @Get('getall')
    async GetAllDlc() {
        return this.dlcService.GetAllDlc();
    }

    @Get('get:/Id')
    async GetDlcById(@Param('Id') Id: string) {
        return this.dlcService.GetDlcById(Id);
    }

    @Put('update/:Id')
    async UpdateDlc(
        @Body() dlcInfo: Dlc
    ) {
        return this.dlcService.UpdateDlc(dlcInfo);
    }
    
    @Delete('delete/:Id')
    async DeleteDlcById(@Param('Id') Id: string) {
        return this.dlcService.RemoveDlc(Id);
    }
}