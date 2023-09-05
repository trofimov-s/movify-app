import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColorSchemaEnum } from '@core/enum';

import { ColorSchemaService } from '@core/services';
import { Observable, map } from 'rxjs';

type ColorSchemaModes = 'dark_mode' | 'light_mode';

@Component({
  selector: 'app-color-schema',
  templateUrl: './color-schema.component.html',
  styleUrls: ['./color-schema.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSchemaComponent implements OnInit {
  public currentSchema$: Observable<ColorSchemaModes>;

  constructor(private colorSchemaService: ColorSchemaService) {}

  public ngOnInit(): void {
    this.currentSchema$ = this.colorSchemaService.shema$.pipe(
      map(
        (schema: ColorSchemaEnum): ColorSchemaModes =>
          schema === ColorSchemaEnum.DARK ? 'dark_mode' : 'light_mode',
      ),
    );
  }

  public changeSchema(): void {
    this.colorSchemaService.changeColorSchema();
  }
}
