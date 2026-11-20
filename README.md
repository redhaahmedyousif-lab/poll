# Bahrain Community Health App — Survey
### تطبيق صحة مجتمع البحرين — الاستبيان

**IB MYP Design Project · Criterion A research survey**

An 18-question bilingual (Arabic / English) survey that gives each participant an instant personal health report (health score, BMI, WHO benchmarks, Bahrain climate tips) and saves the answers to the research Google Sheet.

استبيان من 18 سؤالاً بالعربية والإنجليزية، يعطي المشارك تقريراً صحياً فورياً، ويحفظ الإجابات في Google Sheet الخاص بالبحث.

## Questions · الأسئلة

| # | Question | Saved as |
|---|---|---|
| 1 | Name or nickname · الاسم أو الاسم المستعار | `user_name` |
| 2 | Gender · الجنس | `gender` |
| 3 | Age (category → exact) · العمر | `age_range`, `age` |
| 4–5 | Exact height & weight · الطول والوزن | `height`, `weight` (+ `bmi`, `bmi_category`) |
| 6 | Daily steps (category → exact) · الخطوات | `steps_range`, `daily_steps` |
| 7 | Water (category → exact litres) · الماء | `water_range`, `water_intake` |
| 8 | Screen time (category → exact hours) · وقت الشاشة | `screen_range`, `screen_time` |
| 9 | Sleep (category → exact hours) · النوم | `sleep_range`, `sleep_hours`, `sleep_minutes` |
| 10 | Sleep quality (+ cause) · جودة النوم | `sleep_quality`, `fatigue_cause` |
| 11 | Fast food per week (→ exact) · الوجبات السريعة | `fast_food_freq`, `fast_food_count` |
| 12 | Preferred exercise time & place · وقت ومكان الرياضة | `preferred_time`, `activity_place` |
| 13 | Main challenge · التحدي | `main_challenge` |
| 14 | Main health goal · الهدف | `main_goal` |
| 15 | Most motivating feature · الميزة | `preferred_feature` |
| 16 | App style · أسلوب التطبيق | `preferred_system_style` |
| 17 | Current health app · التطبيق الحالي | `favorite_health_app`, `favorite_app_other` |
| 18 | Wild idea (optional, free text) · فكرة مبتكرة | `wild_idea` |

Every multiple-choice question has an "Other / أخرى" option whose text is saved in `<name>_other`. Each row also stores `health_score`, `steps_goal_pct`, `water_goal_pct`, the option labels, `lang` and `submitted_at`.

## Data & admin · البيانات ولوحة التحليل

- Answers are sent to the project's Google Apps Script web app, which writes one row per response in the Google Sheet. Answers that can't be sent (offline) are queued on the device and retried.
- The analysis dashboard is at <https://bh-health-survey.vercel.app/admin> and reads the same sheet, so responses from this page appear there automatically.

## Privacy · الخصوصية

Participants may use a nickname. Answers are used only for this school research project and are not shared with third parties. The report is for awareness and is not a medical diagnosis.

## Files & styling

- `index.html` — the survey (all logic is inline).
- `styles.css` — compiled Tailwind CSS v3 with the light theme defined in `tailwind.config.js`.
- To rebuild the stylesheet after changing classes in `index.html`:
  `npx tailwindcss@3 -c tailwind.config.js -i tailwind.input.css -o styles.css --minify`
- `qr/` — QR code linking to the published survey.
