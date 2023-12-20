import { Component } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-form-cotizante',
  templateUrl: './form-cotizante.component.html',
  styleUrls: ['./form-cotizante.component.css']
})

export class FormCotizanteComponent {

  constructor(private msg: NzMessageService) {}

  handleChange(info: NzUploadChangeParam): void {

    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }

  }

}
