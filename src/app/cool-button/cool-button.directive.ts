import * as styles from './constants-buttons-css';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCoolButton]',
})
export class CoolButtonDirective implements OnInit {
  @Input() appCoolButton = '';
  @Input() disabled!: boolean;
  @Input() size = '';

  private el: ElementRef;
  private color!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBtnHover(this.appCoolButton, this.size);
  }

  @HostListener('focus') onFocus() {
    this.setBtnFocus(this.appCoolButton, this.size);
  }

  @HostListener('focusout') onFocusout() {
    this.setButtonType(this.appCoolButton, this.size);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setButtonType(this.appCoolButton, this.size);
  }

  @HostListener('click') onClick() {
    this.setOnPressed(this.appCoolButton, this.size);
  }

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): any {
    this.setButtonType(this.appCoolButton, this.size);
    this.createStar(this.appCoolButton);
  }

  private createStar(type: string) {
    if (type === 'primary') {
      this.color = '#ffffff';
    } else if (type === 'secondary') {
      this.color = '#3F4FA0';
    } else if (this.disabled) {
      this.color = '#A2A2A2';
    } else {
      this.color = '#FA6E6B';
    }

    let starCss = `background-color: ${this.color};
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
      );

      display: inline-block;
      height: 15px;
     width: 15px;
     margin-right: 8px;`;

    const btn = document.createElement('i');
    btn.setAttribute('style', starCss);
    this.el.nativeElement.insertAdjacentElement('afterBegin', btn);
  }

  private setButtonType(type: string, size: string) {
    if (this.disabled) {
      if (size === 'large') {
        let disabledCss = styles.disabledButtonLarge;
        this.el.nativeElement.setAttribute('style', disabledCss);
      } else {
        let disabledCss = styles.disabledButtonMedium;
        this.el.nativeElement.setAttribute('style', disabledCss);
      }
    }

    if (type === 'primary') {
      if (size === 'large') {
        let primary = styles.primaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.primaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'secondary') {
      if (size === 'large') {
        let primary = styles.secondaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.secondaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'destructive') {
      if (size === 'large') {
        let primary = styles.destructiveButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.destructiveButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    }
  }

  private setOnPressed(type: string, size: string) {
    if (this.disabled) {
      if (size === 'large') {
        let disabledCss = styles.disabledButtonLarge;
        this.el.nativeElement.setAttribute('style', disabledCss);
      } else {
        let disabledCss = styles.disabledButtonMedium;
        this.el.nativeElement.setAttribute('style', disabledCss);
      }
    }

    if (type === 'primary') {
      if (size === 'large') {
        let primary = styles.onPressedPrimaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onPressedPrimaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'secondary') {
      if (size === 'large') {
        let primary = styles.onPressedSecondaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onPressedSecondaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'destructive') {
      if (size === 'large') {
        let primary = styles.onPressedDestructiveButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onPressedDestructiveButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    }
  }

  private setBtnHover(type: string, size: string) {
    if (this.disabled) {
      if (size === 'large') {
        let disabledCss = styles.disabledButtonLarge;
        this.el.nativeElement.setAttribute('style', disabledCss);
      } else {
        let disabledCss = styles.disabledButtonMedium;
        this.el.nativeElement.setAttribute('style', disabledCss);
      }
    }

    if (type === 'primary') {
      if (size === 'large') {
        let primary = styles.onHoverPrimaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onHoverPrimaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'secondary') {
      if (size === 'large') {
        let primary = styles.onHoverSecondaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onHoverSecondaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'destructive') {
      if (size === 'large') {
        let primary = styles.onHoverDestructiveButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onHoverDestructiveButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    }
  }

  private setBtnFocus(type: string, size: string) {
    if (this.disabled) {
      if (size === 'large') {
        let disabledCss = styles.disabledButtonLarge;
        this.el.nativeElement.setAttribute('style', disabledCss);
      } else {
        let disabledCss = styles.disabledButtonMedium;
        this.el.nativeElement.setAttribute('style', disabledCss);
      }
    }

    if (type === 'primary') {
      if (size === 'large') {
        let primary = styles.onFocusPrimaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onFocusPrimaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'secondary') {
      if (size === 'large') {
        let primary = styles.onFocusSecondaryButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onFocusSecondaryButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    } else if (type === 'destructive') {
      if (size === 'large') {
        let primary = styles.onFocusDestructiveButtonLarge;
        this.el.nativeElement.setAttribute('style', primary);
      } else {
        let primary = styles.onFocusDestructiveButtonMedium;
        this.el.nativeElement.setAttribute('style', primary);
      }
    }
  }
}
