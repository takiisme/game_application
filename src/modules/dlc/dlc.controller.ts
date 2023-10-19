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
import { Response } from 'express'
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
        @Body() dlcInfo: Dlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.dlcService.AddDlc(dlcInfo);

        if(success) {
            response.status(201).json({message});
        }
        else {
            response.status(400).json({message});
        }
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
        @Body() dlcInfo: Dlc,
        @Res() response: Response
    ) {
        const {success, message} = await this.dlcService.UpdateDlc(dlcInfo);
        
        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
    
    @Delete('delete/:Id')
    async DeleteDlcById(
        @Param('Id') Id: string,
        @Res() response: Response
    ) {
        const {success, message} = await this.dlcService.RemoveDlc(Id);

        if(success) {
            response.status(200).json({message})
        }
        else {
            response.status(400).json({message})
        }
    }
}