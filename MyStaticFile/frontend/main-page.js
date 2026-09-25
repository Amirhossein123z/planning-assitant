
let arrow=document.querySelector(".arrow")

arrow.addEventListener("click",()=>{
    let bar=document.querySelector(".bar")
    bar.classList.toggle("active")
    arrow.classList.toggle("turn")
})

let resp_arrow=document.querySelector(".resp-menu .arrow")

resp_arrow.addEventListener("click",()=>{
    let resp_bar=document.querySelector(".resp-menu .bar")
    resp_bar.classList.toggle("active")
    resp_arrow.classList.toggle("turn")
})


let mainarrow=document.querySelector(".m-arrow")

mainarrow.addEventListener("click",()=>{
    let Tr=document.querySelector(".aside1")
    Tr.classList.toggle("Tr")
    mainarrow.classList.toggle("m-arrowturn")

    let section3=document.querySelector(".section3")
    section3.classList.toggle("move3")

    let header=document.getElementById("header")
    header.classList.toggle("border")
})

let footer=document.querySelector(".footer")

footer.addEventListener("click",()=>{
    let tool=document.querySelector(".tool")
    tool.classList.toggle("toolturn")
    let category=document.querySelectorAll(".category")
    category.forEach(function(category){
        category.classList.toggle("info")
    })


    let sizechange2=document.querySelector(".section2")
    sizechange2.classList.toggle("move")

    let f_arrow=document.querySelector(".f-arrow")
    f_arrow.classList.toggle("a-turn")

    let p_footer=document.querySelector(".p-footer")
    p_footer.classList.toggle("plus")

})


var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }




var acc2 = document.getElementsByClassName("accordion2");
    var i;
    for (i = 0; i < acc2.length; i++) {
      acc2[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel2 = this.nextElementSibling;
        if (panel2.style.maxHeight) {
          panel2.style.maxHeight = null;
        } else {
          panel2.style.maxHeight = panel2.scrollHeight + "px";
          console.log("hello")
        } 
      });
    }



let sec=document.querySelector(".sec1")
sec.addEventListener("click",()=>{
  let more=document.querySelector(".more")
  more.classList.add("move")

  let mask=document.querySelectorAll(".mask")
  mask.forEach(function(mask){
    mask.style.display="block";
  })
  
  let calendar=document.querySelector(".resp-body .calendar")
  calendar.classList.remove("show")

}) 



let bar1=document.querySelector(".resp-bar")
bar1.addEventListener("click",()=>{
  let resp_menu=document.querySelector(".resp-menu")
  resp_menu.classList.add("move")
  let mask=document.querySelectorAll(".mask")
  mask.forEach(function(mask){
    mask.style.display="block";
  })

})

let mask=document.querySelectorAll(".mask")
  mask.forEach(m =>{
    m.addEventListener("click",()=>{
      let resp_menu=document.querySelector(".resp-menu")
      resp_menu.classList.remove("move");

      mask.forEach(d =>{
        d.style.display="none";
      });

      let more=document.querySelector(".more")
      more.classList.remove("move") 
      
    })
    
  })




let r_taghvim=document.querySelector(".resp-footer .sec4")
r_taghvim.addEventListener("click",()=>{
  let calendar=document.querySelector(".resp-body .calendar")
  calendar.classList.toggle("show")
})



let accordion=document.querySelector(".accordion")

accordion.addEventListener("click",()=>{
  let list=document.querySelector(".accordion .list")
  
  list.classList.toggle("show")
})



let active=document.querySelector(".accordion")

active.addEventListener("click",()=>{
  let dirImg=document.querySelector(".accordion .dir")
  dirImg.classList.toggle("turn")
})


let active2 = document.getElementById("sec-acc")

if (active2) {
    active2.addEventListener("click", () => {
        let dirImg2 = document.querySelector("#sec-acc .dir2")
        let list2 = document.querySelector("#sec-acc .list2")

        if (dirImg2) {
            dirImg2.classList.toggle("turn")
        }

        if (list2) {
            list2.classList.toggle("show")
        }
    })
}




let search = document.querySelector(".p-name")

if (search) {
    search.addEventListener("click", (e) => {

        e.preventDefault();

        let blurshow = document.querySelector(".blurbox")

        if (blurshow) {
            blurshow.classList.add("show")
        }
    })
}



let blurbox=document.querySelector(".blurbox")
let blursearch=document.querySelector(".blur-search")

blurbox.addEventListener("click",(e)=>{
  if(!e.target.closest(".blur-search")){
    blurbox.classList.remove("show")
  }
})





let notebtn=document.querySelector(".notebtn")

notebtn.addEventListener("click",(e)=>{
    
    e.preventDefault();
    let blurshow2=document.querySelector(".blurbox2")
    blurshow2.classList.add("show")
})

let blurbox2=document.querySelector(".blurbox2")
let notebox=document.querySelector(".notebox")
let noteback_btn=document.querySelector(".note-backbtn")

blurbox2.addEventListener("click",(e)=>{
  if(!e.target.closest(".notebox")){
    blurbox2.classList.remove("show")
  }
})

noteback_btn.addEventListener("click",()=>{
  blurbox2.classList.remove("show")
})



let add=document.querySelector(".add")

add.addEventListener("click",(e)=>{
    
    e.preventDefault();
    let blurshow3=document.querySelector(".blurbox3")
    blurshow3.classList.add("show")
})

let blurbox3=document.querySelector(".blurbox3")
let taskbox=document.querySelector(".taskbox")
let task_back_btn=document.querySelector(".back-btn")

blurbox3.addEventListener("click",(e)=>{
  if(!e.target.closest(".taskbox")){
    blurbox3.classList.remove("show")
  }
})

task_back_btn.addEventListener("click",()=>{
  blurbox3.classList.remove("show")
})




document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", () => {
    console.log("ACCORDION CLICKED");
  });
});




function toggleAccordion(accordion) {
  if (!accordion) return;

  accordion.classList.toggle("active");

  const panel = accordion.nextElementSibling;
  if (!panel) return;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    accordion.querySelector(".dir")?.classList.remove("turn");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    accordion.querySelector(".dir")?.classList.add("turn");
  }
}

// کلیک روی خود accordion
document.addEventListener("click", function (e) {
  const accordion = e.target.closest(".accordion");
  if (accordion) {
    toggleAccordion(accordion);
  }
});

// کلیک روی duties
document.querySelectorAll(".duties").forEach(duty => {
  duty.addEventListener("click", function (e) {
    e.stopPropagation();
    const acc = document.getElementById(this.dataset.target);
    toggleAccordion(acc);
  });
});


document.addEventListener("click", e => {
  if (e.target.closest(".accordion")) {
    console.log("accordion clicked");
  }
});


function toggleAccordion(accordion) {
  accordion.classList.toggle("active");

  const panel = accordion.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", function (e) {
    const accordion = e.currentTarget; // خیلی مهم
    toggleAccordion(accordion);
  });
});



// راه‌اندازی تقویم شمسی برای زمان‌بندی و تاریخ سررسید
function initDatePickers() {
    // بررسی وجود کتابخانه jalalidatepicker
    if (typeof jalalidatepicker === 'undefined') {
        console.warn('jalalidatepicker library not loaded');
        return;
    }
    
    // بارگذاری کتابخانه
    jalalidatepicker.load();
    
    // راه‌اندازی برای زمان‌بندی
    const scheduleInput = document.querySelector('#schedule');
    const schedulePicker = document.querySelector('#schedule-picker');
    const scheduleDisplay = document.querySelector('#schedule-display');
    
    if (scheduleInput && schedulePicker) {
        jalalidatepicker.create(scheduleInput, {
            format: 'YYYY/MM/DD',
            initialValue: true,
            onSelect: function(date) {
                if (date && scheduleDisplay) {
                    scheduleDisplay.textContent = date;
                }
            }
        });
        
        // اضافه کردن رویداد کلیک برای باز کردن تقویم
        schedulePicker.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            scheduleInput.click();
        });
    }
    
    // راه‌اندازی برای تاریخ سررسید
    const dueInput = document.querySelector('#due-date');
    const duePicker = document.querySelector('#due-picker');
    const dueDisplay = document.querySelector('#due-display');
    
    if (dueInput && duePicker) {
        jalalidatepicker.create(dueInput, {
            format: 'YYYY/MM/DD',
            initialValue: false,
            onSelect: function(date) {
                if (dueDisplay) {
                    dueDisplay.textContent = date || 'نامشخص';
                }
            }
        });
        
        // اضافه کردن رویداد کلیک برای باز کردن تقویم
        duePicker.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dueInput.click();
        });
    }
    
    // راه‌اندازی خودکار برای تمام فیلدهای دارای data-jdp
    const jdpInputs = document.querySelectorAll('input[data-jdp]');
    jdpInputs.forEach(function(input) {
        if (!input.hasAttribute('data-jdp-initialized')) {
            jalalidatepicker.create(input);
            input.setAttribute('data-jdp-initialized', 'true');
        }
    });
}

// راه‌اندازی زمانی که صفحه به طور کامل بارگذاری شده
document.addEventListener('DOMContentLoaded', function() {
    // اگر کتابخانه قبلاً بارگذاری شده
    if (typeof jalalidatepicker !== 'undefined') {
        initDatePickers();
    } else {
        // اگر هنوز بارگذاری نشده، منتظر بارگذاری می‌مانیم
        const script = document.querySelector('script[src*="jalalidatepicker"]');
        if (script) {
            script.addEventListener('load', function() {
                setTimeout(initDatePickers, 100);
            });
        }
    }
});





// Automatically open search result panels
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("q");

    // Only open panels when a search is active
    if (!searchQuery || searchQuery.trim() === "") {
        return;
    }

    // Open Tasks panel
    const taskAccordion = document.getElementById("acc1");

    if (taskAccordion) {

        const taskPanel = taskAccordion.nextElementSibling;

        taskAccordion.classList.add("active");

        if (taskPanel) {
            taskPanel.style.maxHeight = taskPanel.scrollHeight + "px";
        }

        const taskArrow = taskAccordion.querySelector(".dir");

        if (taskArrow) {
            taskArrow.classList.add("turn");
        }
    }


    // Open Notes panel
    const noteAccordion = document.getElementById("sec-acc");

    if (noteAccordion) {

        const notePanel = noteAccordion.nextElementSibling;

        noteAccordion.classList.add("active");

        if (notePanel) {
            notePanel.style.maxHeight = notePanel.scrollHeight + "px";
        }

        const noteArrow = noteAccordion.querySelector(".dir2");

        if (noteArrow) {
            noteArrow.classList.add("turn");
        }
    }

});

