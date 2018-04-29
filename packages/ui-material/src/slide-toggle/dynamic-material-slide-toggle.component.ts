import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    ViewChild
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatSlideToggle, RippleGlobalOptions } from "@angular/material";
import {
    DynamicFormControlCustomEvent,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormControlComponent,
    DynamicSwitchModel
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-material-slide-toggle",
    templateUrl: "./dynamic-material-slide-toggle.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicMaterialSlideToggleComponent extends DynamicFormControlComponent {

    @Input() bindId: boolean = true;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicSwitchModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("matSlideToggle") matSlideToggle: MatSlideToggle;

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService,
                @Inject(MAT_RIPPLE_GLOBAL_OPTIONS) @Optional() private RIPPLE_OPTIONS: RippleGlobalOptions) {

        super(layoutService, validationService);
    }
}