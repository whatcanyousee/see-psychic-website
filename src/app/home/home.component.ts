import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { JumbotronComponent } from "../components/jumbotron/jumbotron-section.component";
import { DownloadButtonsComponent } from "../components/download-buttons-section/download-buttons-section.component";
import { HowToSeeComponent } from "../components/how-to-see-section/how-to-see-section.component";
import { TrainerExplainerComponent } from "../components/trainer-explainer-section/trainer-explainer-section.component";
import { VideoEmbedSectionComponent } from "../components/video-embed-section/video-embed-section.component";
import { UnlockPsychicSectionComponent } from "../components/unlock-psychic-section/unlock-psychic-section.component";
import { BottomSectionComponent } from "../components/bottom-section/bottom-section.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        NavbarComponent,
        JumbotronComponent,
        DownloadButtonsComponent,
        HowToSeeComponent,
        TrainerExplainerComponent,
        VideoEmbedSectionComponent,
        UnlockPsychicSectionComponent,
        BottomSectionComponent
    ]
})
export class HomeComponent {

 }
