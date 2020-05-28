document.addEventListener('DOMContentLoaded', () => {
	var rectWidthMin = 10;
	var rectWidthMax = 590;
	var rectHeighthMin = 10;
	var rectHeighthMax = 490;
	var stepVal = 10;

	var valueXFirstNow = 100;
	var valueYFirstNow = 100;
	var valueXSecondNow = 150;
	var valueYSecondNow = 150;
	var rectWidthNow = 50;
	var rectHeightNow = 50;

	document.querySelector("#x1-plus").addEventListener("click", () => {
		if (valueXFirstNow >= stepVal && valueXFirstNow < rectWidthMax && rectWidthNow > rectWidthMin) {
			valueXFirstNow += stepVal;
			rectWidthNow = rectWidthNow - stepVal;
			document.querySelector("#x1").textContent = valueXFirstNow;
			document.querySelector(".rect").style.left = valueXFirstNow;
			document.querySelector(".rect").style.width = rectWidthNow;
		}
	});

	document.querySelector("#x1-minus").addEventListener("click", () => {
		if (valueXFirstNow > stepVal && valueXFirstNow <= rectWidthMax && rectWidthNow >= rectWidthMin) {
			valueXFirstNow -= stepVal;
			rectWidthNow = rectWidthNow + stepVal;
			document.querySelector("#x1").textContent = valueXFirstNow;
			document.querySelector(".rect").style.left = valueXFirstNow;
			document.querySelector(".rect").style.width = rectWidthNow;
		}
	});

	document.querySelector("#y1-plus").addEventListener("click", () => {
		if (valueYFirstNow >= stepVal && valueYFirstNow < rectHeighthMax && rectHeightNow > rectHeighthMin) {
			valueYFirstNow += stepVal;
			rectHeightNow = rectHeightNow - stepVal;
			document.querySelector('#y1').textContent = valueYFirstNow;
			document.querySelector('.rect').style.top = valueYFirstNow;
			document.querySelector('.rect').style.height = rectHeightNow;
		}
	});

	document.querySelector("#y1-minus").addEventListener("click", () => {
		if (valueYFirstNow > stepVal && valueYFirstNow <= rectHeighthMax && rectHeightNow >= rectHeighthMin) {
			valueYFirstNow -= stepVal;
			rectHeightNow = rectHeightNow + stepVal;
			document.querySelector('#y1').textContent = valueYFirstNow;
			document.querySelector('.rect').style.top = valueYFirstNow;
			document.querySelector('.rect').style.height = rectHeightNow;
		}
	});

	document.querySelector("#x2-plus").addEventListener("click", () => {
		if (valueXSecondNow >= stepVal && valueXSecondNow < rectWidthMax && rectWidthNow >= rectWidthMin) {
			valueXSecondNow += stepVal;
			rectWidthNow = rectWidthNow + stepVal;
			document.querySelector('#x2').textContent = valueXSecondNow;
			document.querySelector('.rect').style.width = rectWidthNow;
		}
	});

	document.querySelector("#x2-minus").addEventListener("click", () => {
		if (valueXSecondNow >= stepVal && valueXSecondNow <= rectWidthMax && rectWidthNow > rectWidthMin) {
			valueXSecondNow -= stepVal;
			rectWidthNow = rectWidthNow - stepVal;
			document.querySelector('#x2').textContent = valueXSecondNow;
			document.querySelector('.rect').style.width = rectWidthNow;
		}
	});

	document.querySelector("#y2-plus").addEventListener("click", () => {
		if (valueYSecondNow >= stepVal && valueYSecondNow < rectHeighthMax && rectHeightNow >= rectHeighthMin) {
			valueYSecondNow += stepVal;
			rectHeightNow = rectHeightNow + stepVal;
			document.querySelector('#y2').textContent = valueYSecondNow;
			document.querySelector('.rect').style.height = rectHeightNow;
		}
	});

	document.querySelector("#y2-minus").addEventListener("click", () => {
		if (valueYSecondNow > stepVal && valueYSecondNow <= rectHeighthMax && rectHeightNow > rectHeighthMin) {
			valueYSecondNow -= stepVal;
			rectHeightNow = rectHeightNow - stepVal;
			document.querySelector('#y2').textContent = valueYSecondNow;
			document.querySelector('.rect').style.height = rectHeightNow;
		}
	});

});