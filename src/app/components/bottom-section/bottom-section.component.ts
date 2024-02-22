import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-bottom-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./bottom-section.component.html",
  styleUrl: "./bottom-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RouterModule]
})
export class BottomSectionComponent {
  constructor(private router: Router) {}

  triggerNav() {
    this.router.navigate(["/privacy-policy"]);
  }

  navigateToSocial(social: string) {
    let url = "";
    if (social === "x") {
      url = "https://twitter.com/seewhatyoucando";
    } else if (social === "yt") {
      url = "https://www.youtube.com/channel/UC8hFXJlS3U6mjo3Ytt-KGMQ";
    } else if (social === "tk") {
      url = "https://www.tiktok.com/@seepsychictrainer";
    } else if (social === "tel") {
      url = "https://t.me/SEEwhatyoucanview";
    } else if (social === "od") {
      url = "https://odysee.com/@whatcanyousee:0";
    } else if (social === "red") {
      url = "https://www.reddit.com/r/seepsychictrainer/";
    }

    window.open(url, "_blank");
  }
}
