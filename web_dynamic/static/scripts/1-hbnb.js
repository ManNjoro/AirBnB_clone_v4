document.addEventListener("DOMContentLoaded", ()=>{
    const selectedAmenities = [];
    $("input[type='checkbox']").change(function (e) { 
        e.preventDefault();
        const amenityId = $(this).attr('data-id');
        if ($(this).is(":checked")) {
            selectedAmenities.push(amenityId);
        } else {
            const index = selectedAmenities.indexOf(amenityId);
            if (index != -1) {
                selectedAmenities.splice(index, 1);
            }
        }
    });
    $('.amenities h4').text(selectedAmenities);
});