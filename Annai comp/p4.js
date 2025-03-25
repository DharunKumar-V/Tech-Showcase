$(document).ready(function() {
    $(window).scroll(function() {
        $('.product-card').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 100) { // Adjust this value to trigger earlier or later
                $(this).addClass('visible'); // Add the class to trigger the animation
            }
        });
    });
});


$(document).ready(function() {
    const productDetails = {
        laptop: {
            title: "Laptops",
            image: "p1.jpg",
            specifications: [
                "Processor: Intel i7",
                "RAM: 16GB",
                "Storage: 512GB SSD",
                "Graphics: NVIDIA GTX 1650"
            ]
        },
        desktop: {
            title: "Desktop Computers",
            image: "p2.jpg",
            specifications: [
                "Processor: Intel i9",
                "RAM: 32GB",
                "Storage: 1TB HDD + 256GB SSD",
                "Graphics: NVIDIA RTX 3060"
            ]
        },
        printer: {
            title: "Printers",
            image: "p3.jpg",
            specifications: [
                "Type: Laser Printer",
                "Print Speed: 30 ppm",
                "Connectivity: USB, Wi-Fi"
            ]
        },
        speakers: {
            title: "Speakers",
            image: "p4.jpg",
            specifications: [
                "Power: 20W RMS",
                "Connectivity: Bluetooth, AUX",
                "Battery Life: 10 hours"
            ]
        }
    };

    // Handle the click event on "View More" buttons
    $('.view-more').click(function() {
        const productKey = $(this).data('product');
        const product = productDetails[productKey];

        // Update modal content
        $('#modal-title').text(product.title);
        $('#modal-image').attr('src', product.image);
        $('#modal-specifications').empty(); // Clear previous specs

        product.specifications.forEach(function(spec) {
            $('#modal-specifications').append(`<li>${spec}</li>`);
        });

        // Show the modal
        $('#product-modal').css('display', 'block');
    });

    // Handle the close event for the modal
    $('.close').click(function() {
        $('#product-modal').css('display', 'none');
    });

    // Close the modal when clicking outside of it
    $(window).click(function(event) {
        if ($(event.target).is('#product-modal')) {
            $('#product-modal').css('display', 'none');
        }
    });
});
