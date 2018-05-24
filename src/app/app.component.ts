import { Component, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
	title = 'app';

	radius = 10;

	ngAfterContentInit() {
		const values = [1, 2, 3, 4, 5];

		d3.select('body')
			.selectAll('p')
			.data(values)
			.enter()
			.append('p')
			.text((e) => e);

	}

	clicked(event: any) {
		// d3.select(event.target).append('circle')
		// 	.attr('cx', event.x + 100)
		// 	.attr('cy', event.y + 50)
		// 	.attr('r', () => {
		// 		return this.radius;
		// 	})
		// 	.attr('fill', 'red');
	}

}
