from django import template

register = template.Library()


@register.filter
def duration(value):

    if value is None:
        return ""

    hours = value // 60
    minutes = value % 60

    if hours and minutes:
        result = f"{hours} ساعت و {minutes} دقیقه"

    elif hours:
        result = f"{hours} ساعت"

    else:
        result = f"{minutes} دقیقه"

    persian_digits = "۰۱۲۳۴۵۶۷۸۹"
    english_digits = "0123456789"

    translation_table = str.maketrans(
        english_digits,
        persian_digits
    )

    return result.translate(translation_table)


@register.filter
def category_persian(value):

    categories = {
        "study": "درسی",
        "sport": "ورزشی",
        "financial": "مالی",
        "other": "سایر",
    }

    return categories.get(value, value)