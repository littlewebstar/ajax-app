$(document).ready(function() {
	$(document).on('click', '#gonderButton', function() {
		const sehir = $('#textboxSehir').val();

		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/find?q=${sehir}&units=metric&appid=7269cefc59c41c323f01c3b9a4e90885`,
		}).done(function(data) {
      const temp = data.list[0].main.temp;

      $("#sonuc").text(temp);
		});
	});
});


// Diger value ile ekrana veriler tasima ... 