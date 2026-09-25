(function() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    const searchBtn = document.getElementById('searchBtn');
    const card = document.getElementById('searchCard');

    // ----- helpers -----

    function updateClearAndState() {
        const hasText = input.value.trim().length > 0;

        if (hasText) {
            clearBtn.classList.add('visible');
            card.classList.add('has-text');
        } else {
            clearBtn.classList.remove('visible');
            card.classList.remove('has-text');
        }
    }


    // function clearSearch() {
    //     input.value = '';
    //     input.focus();

    //     updateClearAndState();

    //     searchBtn.classList.remove('loading');
    // }

    function clearSearch() {
        input.value = '';

        updateClearAndState();

        searchBtn.classList.remove('loading');

        window.location.href = card.action;
    }


    function performSearch() {
        const query = input.value.trim();

        if (query === '') {

            // gentle nudge
            card.style.transition =
                'transform 0.08s ease, width 0.55s cubic-bezier(0.23, 1, 0.32, 1)';

            card.style.transform = 'scale(0.97)';

            setTimeout(() => {
                card.style.transform = '';
            }, 120);

            return;
        }

        searchBtn.classList.add('loading');

        // setTimeout(() => {

        //     searchBtn.classList.remove('loading');

        //     // Submit the form
        //     HTMLFormElement.prototype.submit.call(card);

        // }, 600);

        setTimeout(() => {

            searchBtn.classList.remove('loading');

            console.log("ABOUT TO SUBMIT");
            console.log("Form action:", card.action);
            console.log("Form method:", card.method);
            console.log("Search value:", input.value);
            
            HTMLFormElement.prototype.submit.call(card);

        }, 600);
    }


    // ----- event listeners -----

    input.addEventListener('input', updateClearAndState);


    input.addEventListener('keydown', function(e) {

        if (e.key === 'Enter') {

            e.preventDefault();

            performSearch();
        }


        if (e.key === 'Escape') {

            if (input.value.trim() !== '') {
                clearSearch();
            } else {
                input.blur();
            }

            e.preventDefault();
        }
    });


    clearBtn.addEventListener('click', function(e) {

        e.stopPropagation();

        clearSearch();
    });


    searchBtn.addEventListener('click', function(e) {

        e.preventDefault();

        performSearch();
    });


    // click on card background → focus input
    // but not on buttons

    card.addEventListener('click', function(e) {

        if (
            !e.target.closest('.search-btn') &&
            !e.target.closest('.clear-btn')
        ) {
            input.focus();
        }
    });


    // initial state

    updateClearAndState();

    input.addEventListener('change', updateClearAndState);


    console.log('✨ Smooth expand-left search ready');

})();



document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("q");

    if (searchQuery && searchQuery.trim() !== "") {

        document.querySelectorAll(".accordion").forEach(function (accordion) {

            const panel = accordion.nextElementSibling;

            if (!panel) return;

            // Open the panel
            accordion.classList.add("active");

            panel.style.maxHeight = panel.scrollHeight + "px";

            // Rotate arrow
            const dir = accordion.querySelector(".dir, .dir2");

            if (dir) {
                dir.classList.add("turn");
            }

            // Show the information list
            const list = accordion.querySelector(".list, .list2");

            if (list) {
                list.classList.add("show");
            }
        });
    }

});