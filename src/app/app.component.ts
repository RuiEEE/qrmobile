import { Component,OnInit } from '@angular/core';

// import '../scripts/jsqrcode/grid.js';
// import '../scripts/jsqrcode/version.js';
// import '../scripts/jsqrcode/detector.js';
// import '../scripts/jsqrcode/formatinf.js';
// import '../scripts/jsqrcode/errorlevel.js';
// import '../scripts/jsqrcode/bitmat.js';
// import '../scripts/jsqrcode/datablock.js';
// import '../scripts/jsqrcode/bmparser.js';
// import '../scripts/jsqrcode/datamask.js';
// import '../scripts/jsqrcode/rsdecoder.js';
// import '../scripts/jsqrcode/gf256poly.js';
// import '../scripts/jsqrcode/gf256.js';
// import '../scripts/jsqrcode/decoder.js';
// import '../scripts/jsqrcode/QRCode.js';
// import '../scripts/jsqrcode/findpat.js';
// import '../scripts/jsqrcode/alignpat.js';
// import '../scripts/jsqrcode/databr.js';

// import '../scripts/jsqrcode/webqr.js';

declare var externalLoad: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  	ngOnInit(): void {
		externalLoad.load();
	}
}
