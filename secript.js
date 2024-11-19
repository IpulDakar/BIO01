document.addEventListener("DOMContentLoaded", function() {
    var biografiItems = document.querySelectorAll('.biografi-item');

    biografiItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            var span = this.querySelector('span');
            // Buat huruf menjadi besar saat mouseover
            span.style.textTransform = 'uppercase';
            // Beri warna latar belakang saat mouseover
            this.style.backgroundColor = '#f39c12'; // Misalnya, warna oranye
        });

        item.addEventListener('mouseout', function() {
            var span = this.querySelector('span');
            // Kembalikan huruf ke ukuran normal saat mouseout
            span.style.textTransform = 'none';
            // Kembalikan warna latar belakang saat mouseout
            this.style.backgroundColor = 'transparent';
        });
    });
});