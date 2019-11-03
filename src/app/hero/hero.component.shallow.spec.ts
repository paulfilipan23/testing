import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Hero Component (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {
            id: 1,
            name: 'Super Dude',
            strength: 3
        };

        expect(fixture.componentInstance.hero.name).toEqual('Super Dude');

    })

    it('should render hero  name in archor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'Super Dude', strength: 3 };
        fixture.detectChanges();

        let deA = fixture.debugElement.query(By.css('a'));
        expect(deA.nativeElement.textContent).toContain('Super Dude');

        //expect(fixture.nativeElement.querySelector('a').textContent).toContain('Super Dude');
    })
})