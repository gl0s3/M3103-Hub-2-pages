import{c as S,r as g,j as r,Z as nr,C as V,_ as B,$ as er,i as ir,d as ar,A as sr,a0 as tr,q as or}from"./index-ZW0u7zcg.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=S("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=S("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=S("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=S("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=S("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=S("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]),hr={"bubble_sort.cpp":`/**\r
 * Алгоритм: Сортировка пузырьком (Bubble Sort)\r
 * Тип: Сортировка (стабильная, если делать правильно; тут — не совсем, но об этом ниже)\r
 * \r
 * Скорость: O(n^2) — и это не случайность, это приговор\r
 * Память: O(1) — вообще ничего не выделяем, красота\r
 * \r
 * Так, народ. Вот мы и добрались до самой позорной сортировки в этом курсе. Пузырёк.\r
 * \r
 * Если merge_sort — это профессор, quick_sort — это хулиган, count_sort — это читер,\r
 * то bubble_sort — это тот чувак, который на паре спит, а потом говорит "я всё понял".\r
 * \r
 * Идея: проходим по массиву и сравниваем СОСЕДНИЕ элементы. Если левый больше правого — меняем их местами.\r
 * Прошли один раз — самый большой элемент "всплыл" в конец, как пузырёк воздуха в воде. Отсюда и название.\r
 * Прошли второй раз — второй по величине всплыл на своё место. И так n раз. Профит.\r
 * \r
 * Почему O(n^2)? Потому что два вложенных цикла, каждый до n. n * n = n^2. Всё.\r
 * И это не "в среднем", не "в худшем" — это ВСЕГДА. Даже если массив уже отсортирован,\r
 * мы всё равно пройдёмся n^2 раз, потому что нам лень добавить флаг "были ли обмены".\r
 * Хотя могли бы — и тогда на отсортированном массиве было бы O(n). Но кто ж нас учил.\r
 * \r
 * Стабильность: классический пузырёк СТАБИЛЕН, если менять только когда arr[j] > arr[j+1] (строго больше).\r
 * Тогда равные элементы не меняются местами. НО. В этой конкретной реализации используется\r
 * сравнение arr[i] < arr[j] для ВСЕХ пар i, j — включая далёкие друг от друга. Это не пузырёк,\r
 * это какой-то монстр. Он делает n^2 сравнений и n^2 обменов, и он НЕстабилен, потому что\r
 * меняет местами элементы, которые не являются соседями. Так что формально — это даже не совсем пузырёк.\r
 * Это "сортировка двойным циклом", которая работает, но вызывает боль у всех, кто её видит.\r
 * \r
 * Кстати, если тебе интересно, почему такой вариант всё-таки сортирует: на каждом шаге внешнего цикла i\r
 * мы гарантированно ставим arr[i] на его место. Как? Потому что во внутреннем цикле мы сравниваем arr[i]\r
 * со ВСЕМИ остальными и меняем, если arr[i] меньше. После полного прохода j от 0 до n-1,\r
 * arr[i] становится минимальным среди arr[i..n-1]. Потом i++ и повторяем. Это работает, но это\r
 * О(n^2) обменов, что в разы хуже, чем у нормального пузырька (O(n^2) сравнений, но O(n^2) обменов в худшем,\r
 * а в среднем — O(n^2) сравнений и O(n^2) обменов, лол, всё равно плохо).\r
 * \r
 * Вердикт: используй только для обучения. Или для массивов длиной 5. Или для собеседования,\r
 * где просят написать что-то простое. В продакшене — никогда. Никогда-никогда.\r
 */\r
\r
#include <iostream>\r
#include "algosiki.h"\r
using namespace std;\r
\r
/**\r
 * Собственно, bubble_sort.\r
 * \r
 * Внешний цикл i — "какой по счёту элемент ставим на место".\r
 * Внутренний цикл j — "с чем сравниваем".\r
 * \r
 * На каждой итерации i мы пробегаем по ВСЕМУ массиву j от 0 до n-1 (а не от 0 до n-1-i, как в нормальном пузырьке),\r
 * и если arr[i] меньше arr[j] — меняем их местами. В итоге после внутреннего цикла arr[i] — минимальный\r
 * среди arr[i..n-1]. Потом i++ и всё сначала.\r
 * \r
 * Работает? Да. Оптимально? Нет. Но зато коротко и понятно даже второкурснику.\r
 * \r
 * Кстати, обрати внимание: в нормальном пузырьке внутренний цикл идёт до n-1-i, потому что\r
 * последние i элементов уже на своих местах. Тут этого нет. Мы каждый раз пробегаем весь массив.\r
 * Так что это даже не оптимизированный пузырёк. Это пузырёк, который не знает, что он пузырёк.\r
 */\r
void bubble_sort(Data* arr, size_t n) {\r
    for (size_t i = 0; i < n; i++) {\r
        for (size_t j = 0; j < n; j++) {\r
            if (arr[i].payload < arr[j].payload) swap(arr[i], arr[j]);\r
        }\r
    }\r
}\r
\r
int main() {\r
\r
    /// Стандартный ввод\r
\r
    size_t n;\r
    cin >> n;\r
\r
    Data* data = new Data[n];\r
\r
    for (size_t i = 0; i < n; i++) {\r
        int32_t key, val;\r
        cin >> key >> val;\r
        data[i] = { key, val };\r
    }\r
\r
    /// Стандартный ввод\r
\r
    // Выводим исходный массив\r
    print_array(data, n, fn_print_data);\r
    cout << endl;\r
\r
    // Вызываем сортровку\r
    bubble_sort(data, n);\r
    \r
    // Выводим отсортированный массив\r
    print_array(data, n, fn_print_data);\r
\r
    return 0;\r
}`,"counting_sort.cpp":`/**\r
 * Алгоритм: Сортировка подсчётом (Counting Sort)\r
 * Тип: Сортировка (стабильная, если делать правильно; тут — не совсем, но об этом ниже)\r
 * \r
 * Скорость: O(n + k), где k — размах значений (max - min)\r
 * Память: O(k) — под массив подсчётов\r
 * \r
 * Так. Все предыдущие сортировки (merge, quick) работали с СРАВНЕНИЯМИ. Мы брали два элемента,\r
 * смотрели "кто больше", и на основе этого принимали решения. И знаешь что? Доказано, что быстрее,\r
 * чем O(n log n), на сравнениях не выедешь. Это как закон природы. Хочешь быстрее — надо НЕ сравнивать.\r
 * \r
 * Вот тут и выходит на сцену сортировка подсчётом. Мы вообще НЕ СРАВНИВАЕМ элементы между собой.\r
 * Мы просто СЧИТАЕМ, сколько раз встречается каждое значение. Всё. Гениально и тупо одновременно.\r
 * \r
 * Идея:\r
 * 1. Находим min и max в массиве. Понимаем, какой у нас диапазон значений.\r
 * 2. Создаём массив "parts" (счётчики) размером (max - min + 1). Изначально все нули.\r
 * 3. Проходим по исходному массиву и для каждого элемента arr[i] делаем parts[arr[i] - min]++.\r
 *    То есть банально считаем, сколько раз встретилось каждое число.\r
 * 4. Проходим по parts и выписываем числа обратно в arr в порядке возрастания: сначала все min,\r
 *    потом min+1, потом min+2... и так до max. Сколько раз встретилось — столько раз и выписали.\r
 * \r
 * Всё. Массив отсортирован. Мы даже ни разу не спросили "а это больше, чем то?".\r
 * \r
 * Почему O(n + k)? Потому что мы делаем:\r
 * - один проход по arr, чтобы найти min/max — O(n)\r
 * - один проход по arr, чтобы посчитать — O(n)\r
 * - один проход по parts, чтобы выписать обратно — O(k)\r
 * Итого O(n + k). Если k сопоставимо с n — это просто O(n). Быстрее не бывает, физически.\r
 * \r
 * НО. Есть нюанс. Если k ОГРОМНОЕ (например, массив из 10 элементов, но значения от 0 до 1_000_000_000) —\r
 * мы выделим гигантский массив parts, почти весь пустой, и будем по нему ползти. O(n + k) превратится\r
 * в O(k), и это будет МЕДЛЕННЕЕ, чем любой quicksort. Так что counting sort — он для случаев,\r
 * когда значения лежат в УЗКОМ диапазоне. Например, оценки от 1 до 5, или возраст людей от 0 до 120.\r
 * \r
 * Про стабильность: классический counting sort МОЖНО сделать стабильным, если вместо простого подсчёта\r
 * строить префиксные суммы и раскладывать элементы с конца. Но в этой реализации мы просто выписываем\r
 * числа по порядку — и нам плевать на исходный порядок равных элементов. Так что формально —\r
 * эта реализация НЕстабильна. Но так как мы сортируем просто числа (long), а не структуры с payload,\r
 * нам это вообще фиолетово. Числа — они и есть числа, у них нет "исходного порядка".\r
 * \r
 * Кстати, обрати внимание: этот алгоритм работает ТОЛЬКО с целыми числами (или с чем-то, что можно\r
 * однозначно отобразить в индекс массива). С float или строками такое не прокатит без костылей.\r
 * \r
 * И ещё: в коде есть классический баг новичка — size = max - min, а надо бы max - min + 1.\r
 * Потому что элементов в диапазоне [min, max] включительно — ровно max - min + 1 штук.\r
 * Но так как в цикле выписывания мы идём до size, а не до size+1, мы теряем один бакет —\r
 * а именно бакет для max. Впрочем, если max встречается, он потеряется. Упс. Но код работает\r
 * на тестах, значит либо max не встречается, либо нам повезло. В общем, имей в виду.\r
 */\r
\r
#include <iostream>\r
#include "algosiki.h"\r
using namespace std;\r
\r
\r
/**\r
 * Собственно, count_sort.\r
 * \r
 * arr — массив long'ов, n — его длина.\r
 * \r
 * Шаг 1: ищем min и max. Это нужно, чтобы понять, сколько бакетов нам вообще надо.\r
 * Если бы мы знали, что все числа от 0 до 100 — могли бы сразу создать массив на 101.\r
 * Но мы не знаем, поэтому ищем.\r
 * \r
 * Шаг 2: создаём parts — массив счётчиков. Индекс i в parts соответствует значению (i + min).\r
 * То есть parts[0] — это счётчик для min, parts[1] — для min+1, и так далее.\r
 * \r
 * Шаг 3: проходим по arr и инкрементим нужный счётчик. arr[i] - min — это и есть индекс в parts.\r
 * \r
 * Шаг 4: проходим по parts и выписываем значения обратно в arr. Для каждого i, если parts[i] > 0,\r
 * пишем (i + min) столько раз, сколько насчитали. Указатель m — куда писать в arr.\r
 * \r
 * Всё. Никаких сравнений, никаких swap'ов, никакой рекурсии. Чистая механика.\r
 */\r
void count_sort(long* arr, long n) {\r
    long min = arr[0], max = arr[0];\r
\r
    // ищем диапазон значений\r
    for (long i = 1; i < n; i++) {\r
        if (arr[i] < min) min = arr[i];\r
        if (arr[i] > max) max = arr[i];\r
    }\r
    size_t size = max-min+1; \r
\r
    // создаём массив счётчиков и обнуляем его\r
    long* parts = new long[size];\r
    for (long i = 0; i < size; i++) parts[i] = 0;\r
\r
    // считаем, сколько раз встречается каждое значение\r
    for (long i = 0; i < n; i++) {\r
        parts[arr[i]-min]++;\r
    }\r
\r
    // выписываем значения обратно в arr в порядке возрастания\r
    long m = 0;\r
    for (long i = 0; i < size; i++) {\r
        while (parts[i]) {\r
            arr[m++] = i+min;\r
            parts[i]--;\r
        }\r
    }\r
}\r
\r
int main() {\r
\r
    /// Стандартный ввод\r
\r
    size_t n;\r
    cin >> n;\r
\r
    long* data = new long[n];\r
\r
    for (size_t i = 0; i < n; i++) {\r
        long val;\r
        cin >> val;\r
        data[i] = val;\r
    }\r
\r
    /// Стандартный ввод\r
\r
    // Выводим исходный массив\r
    print_array(data, n, fn_print_long);\r
    cout << endl;\r
\r
    // Вызываем сортровку\r
    count_sort(data, n);\r
    \r
    // Выводим отсортированный массив\r
    print_array(data, n, fn_print_long);\r
\r
    return 0;\r
}`,"insertion_sort.cpp":`/**\r
 * Алгоритм: Сортировка выбором (Selection Sort)\r
 * Тип: Сортировка (нестабильная)\r
 * \r
 * Скорость: O(n^2) — всегда, без вариантов\r
 * Память: O(1)\r
 * \r
 * Помнишь bubble_sort? Тот, который n^2 раз пробегал по всему массиву и менял всё подряд?\r
 * Вот это — его чуть более умный брат. Отличие в инварианте: у пузырька мы на каждом шаге\r
 * ставили arr[i] на место, гоняя его по всему массиву. А тут мы сначала ИЩЕМ минимум в arr[i..n-1],\r
 * и только потом меняем его с arr[i]. Один обмен на итерацию вместо n. Сравнений столько же, но\r
 * обменов в разы меньше.\r
 * \r
 * Всё. Больше добавить нечего — остальное как в bubble_sort, только без тупняка с обменами.\r
 */\r
\r
#include <iostream>\r
#include "algosiki.h"\r
using namespace std;\r
\r
void selection_sort(Data* arr, size_t n) {\r
    for (size_t i = 0; i < n; i++) {\r
        size_t min = i;\r
        for (size_t j = i; j < n; j++) {\r
            if (arr[j].payload < arr[min].payload) min = j;\r
        }\r
        swap(arr[i], arr[min]);\r
    }\r
}\r
\r
int main() {\r
\r
    /// Стандартный ввод\r
\r
    size_t n;\r
    cin >> n;\r
\r
    Data* data = new Data[n];\r
\r
    for (size_t i = 0; i < n; i++) {\r
        int32_t key, val;\r
        cin >> key >> val;\r
        data[i] = { key, val };\r
    }\r
\r
    /// Стандартный ввод\r
\r
    // Выводим исходный массив\r
    print_array(data, n, fn_print_data);\r
    cout << endl;\r
\r
    // Вызываем сортровку\r
    selection_sort(data, n);\r
    \r
    // Выводим отсортированный массив\r
    print_array(data, n, fn_print_data);\r
\r
    return 0;\r
}`,"merge_sort.cpp":`/**\r
 * Алгоритм: Сортировка слияниями\r
 * Тип: Сортировка(стабильная)\r
 * \r
 * Скорость: O(n log n)\r
 * Память: O(n)\r
 * \r
 * Основная идея данной сортировки лежит в разделении вниз. Чтобы не дублировать проход по элементам, как это \r
 * было в сортировке выбором, вставками и тд, мы начинаем сортировать "в ширь". \r
 * \r
 * Каждый раз мы "условно" делим нащ массив на два маленьких подмассива. 1 левве другого. Затем делаем это опять. Опять. Опять...\r
 * Рано или поздно, но мы дойдём до случая, когда в массиве будет 1 элемент. Это значит, что этот массив отсортиован. Круто...\r
 * \r
 * Теперь перейдём на шаг выше, из которого мы получили эти два единичных массива. Теперь мы можем отсортировать их. Поскольку в каждом из них выполняется условие, \r
 * что оба массива упорядоченны относительно себя. Это значит, что мы можем за линию(O(n)) упорядочить их в массив, состоящий уже из элементов обоих этиих массивов.\r
 *\r
 * Данную операцию мы можем повторить до самой верхушки.\r
 *\r
 * Поскольку мы делим на два, то глубина погружения - кол-во слоёв разбиений = log_2 n.\r
 * На каждом таком слое мы проходимя по массивам, длины 2^(-k). При этом, поскольку слоёв тоже 2^k: на каждом слое суммарно мы делаем n операций проходок.\r
 * Отсюда и асимптотика O(n log n)\r
 * \r
 * Данная сортировка стабильна, и имеет ПОСТОЯННУЮ асимптотику, а не как ебучий quicksort.\r
 */\r
\r
#include <iostream>\r
#include "algosiki.h"\r
using namespace std;\r
\r
void merge_sort(Data* array, long left, long right) {\r
    if (right-left==1) return; // базовый случай, если наткнулись на единичный массив - ничего не делаем.\r
    long mid = (left+right)/2; // ищем центральный индекс, чтобы разбить на два подмассива.\r
\r
    //\r
    // Вызываем для левой и правой стороны. Мы делаем это до пересборки массива, так-как хотим, чтобы на моменте пересборки левый и правый массив были отсортированы.\r
    //\r
    merge_sort(array, left, mid);\r
    merge_sort(array, mid, right);\r
\r
    // Выделяем память для временного массива.\r
    Data* sub_array = new Data[right-left];\r
\r
    // Пока оба индекса(левый и правый) не вышли за рамки массивов, мы собираем временный массив сразу в упорядоченном статуск.\r
    long i = 0, left_half = left, right_half = mid; \r
    while (left_half < mid && right_half < right) {\r
        if (array[left_half].payload < array[right_half].payload) {\r
            sub_array[i++] = array[left_half++];\r
        } else {\r
            sub_array[i++] = array[right_half++];\r
        }\r
    }\r
    // Так как while завершил работу мы знаем, массивов был полностью перенесён. Это значит, что все\r
    // элементы оставшегося массива являются больше, чем все, что были добавлены до этого.\r
    // поскольку один из индексов уже равен mid или right, отработает только 1 из циклов снизу.\r
    while (left_half < mid) sub_array[i++] = array[left_half++];\r
    while (right_half < right) sub_array[i++] = array[right_half++];\r
    \r
    // Перезаписываем исходный массив\r
    for (size_t j = 0; j < right-left; j++) {\r
        array[left+j] = sub_array[j];\r
    }\r
\r
    // Освобождаем память\r
    delete[] sub_array;\r
}\r
\r
int main() {\r
\r
    /// Стандартный ввод\r
\r
    size_t n;\r
    cin >> n;\r
\r
    Data* data = new Data[n];\r
\r
    for (size_t i = 0; i < n; i++) {\r
        int32_t key, val;\r
        cin >> key >> val;\r
        data[i] = { key, val };\r
    }\r
\r
    /// Стандартный ввод\r
\r
    // Выводим исходный массив\r
    print_array(data, n, fn_print_data);\r
    cout << endl;\r
\r
    // Вызываем сортровку\r
    merge_sort(data, 0, n);\r
    \r
    // Выводим отсортированный массив\r
    print_array(data, n, fn_print_data);\r
\r
    return 0;\r
}`,"quick_sort.cpp":`/**\r
 * Алгоритм: Быстрая сортировка (QuickSort)\r
 * Тип: Сортировка (нестабильная)\r
 * \r
 * Скорость: O(n log n) в среднем, O(n^2) в худшем (и это не баг, это фича)\r
 * Память: O(log n) из-за рекурсии (в среднем), O(n) в худшем случае\r
 * \r
 * Ну что, дожили. Тот самый "ебучий quicksort", про который я писал в merge_sort'е.\r
 * \r
 * Основная идея: выбираем опорный элемент (pivot). Кидаем всё, что меньше него — налево, всё что больше — направо.\r
 * Всё. На этом алгоритм, собственно, закончился. Опорный элемент встал на своё МЕСТО. Не "примерно на своё", не "около своего" — \r
 * на АБСОЛЮТНО своё место, где он будет в отсортированном массиве. Мы это знаем наверняка.\r
 * \r
 * Дальше — рекурсия. Слева от пивота — свой пивот, справа — свой. И так пока не дойдём до массивов длиной 0 или 1 элемент.\r
 * \r
 * Почему O(n log n)? Потому что в среднем мы делим массив на две примерно равные половинки (глубина log n),\r
 * и на каждом уровне рекурсии мы проходим по всем элементам (n операций). Итого n log n. Красиво.\r
 * \r
 * Почему O(n^2)? А вот если нам "повезёт" и пивот каждый раз будет минимальным или максимальным элементом —\r
 * мы получим разбиение вида "1 элемент | n-1 элементов". Глубина станет n, и вместо логарифма получим n^2.\r
 * Классика жанра — отсортированный массив и pivot = первый элемент. Привет.\r
 * \r
 * Данная сортировка НЕстабильна. Потому что swap'ы. Потому что нам плевать на порядок равных элементов.\r
 * И память: рекурсия жрёт стек. В среднем log n, но если очень постараться — можно и n выжать.\r
 * \r
 * В коде представлены две реализации разбиения: "hour" (с медианой из трёх, чтобы хоть как-то бороться с худшим случаем)\r
 * и "rand_last" (со случайным пивотом, чтобы рандомно увернуться от O(n^2)). Выбирай на вкус.\r
 */\r
\r
#include <iostream>\r
#include "algosiki.h"\r
using namespace std;\r
\r
/**\r
 * Разбиение "hour" — медиана из трёх.\r
 * \r
 * Тут мы не тупо берём первый или последний элемент, а смотрим на left, mid, right и выбираем СРЕДНИЙ по значению.\r
 * Зачем? Чтобы на уже отсортированных массивах не получить худший случай. Ну и заодно чуть-чуть потюнить константу.\r
 * \r
 * Сначала тремя if'ами ставим arr[left] <= arr[mid] <= arr[right]. То есть median of three — она самая.\r
 * Потом берём arr[mid] как pivot. Всё честно.\r
 * \r
 * Дальше — два указателя i и j, которые едут навстречу друг другу. i ищет элемент >= pivot, j ищет <= pivot.\r
 * Когда нашли — меняем местами. Пока i <= j.\r
 * \r
 * В конце возвращаем j — это граница, по которой будем рекурситься. Всё что слева от j — меньше pivot, всё что справа — больше.\r
 */\r
long hour(Data* arr, long left, long right) {\r
    int i = left;\r
    int j = right;\r
    int mid = left + (right-left)/2;\r
\r
    // медиана из трёх: ставим arr[left] <= arr[mid] <= arr[right]\r
    if (arr[left].payload > arr[mid].payload) {\r
        std::swap(arr[left], arr[mid]);\r
    }\r
    if (arr[right].payload < arr[left].payload) {\r
        std::swap(arr[left], arr[right]);\r
    }\r
    if (arr[mid].payload > arr[right].payload) {\r
        std::swap(arr[right], arr[mid]);\r
    }\r
\r
    Data p = arr[mid]; // вот наш pivot, красавец\r
\r
    // два указателя навстречу друг другу\r
    while (i <= j) {\r
        while (arr[i].payload < p.payload) i++; // ищем слева то, что должно быть справа\r
        while (arr[j].payload > p.payload) j--; // ищем справа то, что должно быть слева\r
        if (i <= j) {\r
            std::swap(arr[i], arr[j]); // меняем — вот и вся магия\r
            i++;\r
            j--;\r
        }\r
    }\r
    \r
    return j; // граница разбиения\r
}\r
\r
/**\r
 * Разбиение "rand_last" — случайный пивот.\r
 * \r
 * Тут идея проще: берём СЛУЧАЙНЫЙ элемент, кидаем его в конец (ну, почти в конец — на right-1),\r
 * и делаем классическое разбиение Ломуто (это которое с одним указателем i, который "граница меньших").\r
 * \r
 * Идём j от left до right-1. Если arr[j] < pivot — кидаем его в "зону меньших" (до i), i++.\r
 * В конце ставим pivot на его законное место — между меньшими и большими.\r
 * \r
 * Зачем случайность? Чтобы рандомно увернуться от O(n^2). На sorted массиве медиана из трёх работает,\r
 * а случайность работает вообще на всём. Платим за это вызовом rand() — ну, терпимо.\r
 */\r
long rand_last(Data* arr, long left, long right) {\r
    long r = rand()%(right-left)+left; // случайный индекс в [left, right)\r
    swap(arr[right-1], arr[r]); // кидаем его в конец\r
    Data p = arr[right-1]; // pivot — последний элемент\r
\r
    long i = 0; // граница "зоны меньших"\r
    for (long j = left; j < right-1; j++) {\r
        if (arr[j].payload < p.payload) {\r
            swap(arr[j], arr[i++]); // кидаем в зону меньших\r
        }\r
    }\r
    swap(arr[i], arr[r-1]); // ставим pivot на его место\r
\r
    return i; // граница разбиения\r
}\r
\r
/**\r
 * Собственно, сам quick_sort.\r
 * \r
 * Тут всё просто: если массив длиной 0 или 1 — он уже отсортирован, выходим.\r
 * Иначе — вызываем разбиение (переданное как указатель на функцию, чтобы можно было выбрать стратегию),\r
 * получаем границу i, и рекурсивно сортируем левую и правую части.\r
 * \r
 * Обрати внимание: reassemble возвращает j в "hour" и i в "rand_last".\r
 * В "hour" рекурсия идёт [left, j] и [j+1, right].\r
 * В "rand_last" — [left, i] и [i+1, right].\r
 * Это важно, потому что в "hour" граница j — это последний элемент левой части,\r
 * а в "rand_last" i — это позиция pivot'а, который уже на своём месте.\r
 * \r
 * Кстати, да — мы передаём функцию разбиения как параметр. Это чтобы можно было легко переключаться\r
 * между стратегиями, не переписывая сам алгоритм. Норм тема.\r
 */\r
void quick_sort(Data* arr, long left, long right, long (*reassemble)(Data*, long, long)) {\r
    if (right-left<=1) return; // база: 0 или 1 элемент — сортировать нечего\r
\r
    long i = reassemble(arr, left, right); // разбили массив, получили границу\r
\r
    // рекурсимся в левую и правую части\r
    quick_sort(arr, left, i, reassemble);\r
    quick_sort(arr, i+1, right, reassemble);\r
}\r
\r
int main() {\r
\r
    /// Стандартный ввод\r
\r
    size_t n;\r
    cin >> n;\r
\r
    Data* data = new Data[n];\r
\r
    for (size_t i = 0; i < n; i++) {\r
        int32_t key, val;\r
        cin >> key >> val;\r
        data[i] = { key, val };\r
    }\r
\r
    /// Стандартный ввод\r
\r
    // Выводим исходный массив\r
    print_array(data, n, fn_print_data);\r
    cout << endl;\r
\r
    // Вызываем сортровку\r
    quick_sort(data, 0, n, hour);\r
    \r
    // Выводим отсортированный массив\r
    print_array(data, n, fn_print_data);\r
\r
    return 0;\r
}`},pr="11b6fc7c6166bd8e15a7dde9fc1ac27bfd8a2226",mr=t=>`https://github.com/gl0s3/M3103/blob/${pr}/${encodeURIComponent("Примеры и реализации")}/${encodeURIComponent("Алгосы")}/${t}`,gr=t=>t.file?hr[t.file]:null,N=`#include <algorithm>
#include <vector>
using namespace std;

`,R=[{id:"merge",name:"Слиянием",short:"Merge sort",best:"O(n log n)",average:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:"Да, в адаптации",file:"merge_sort.cpp",description:"Разделяем массив пополам, сортируем обе части и сливаем их: каждый раз забираем меньший из двух первых элементов.",note:"Адаптация merge_sort.cpp: добавлена обработка пустого массива, сравнение ≤ сохраняет порядок равных элементов. В оригинале используется <, поэтому оригинал неустойчив.",pseudocode:`mergeSort(left, right):
  если right − left ≤ 1: выход
  mid ← (left + right) / 2
  mergeSort(left, mid)
  mergeSort(mid, right)
  пока обе части не пусты:
    взять меньший первый элемент
    при равенстве взять из левой части
  дописать остаток; перенести результат в массив`,code:N+`void merge_sort(vector<int>& a, int l, int r) {
    if (r - l <= 1) return;
    int m = l + (r - l) / 2;
    merge_sort(a, l, m); merge_sort(a, m, r);
    vector<int> tmp;
    int i = l, j = m;
    while (i < m && j < r)
        tmp.push_back(a[i] <= a[j] ? a[i++] : a[j++]);
    while (i < m) tmp.push_back(a[i++]);
    while (j < r) tmp.push_back(a[j++]);
    copy(tmp.begin(), tmp.end(), a.begin() + l);
}
// Вызов: merge_sort(a, 0, int(a.size()));`},{id:"quick",name:"Быстрая",short:"Quick sort",best:"O(n log n)",average:"O(n log n)",worst:"O(n²)",space:"O(log n) в среднем; O(n) в худшем",stable:"Нет",file:"quick_sort.cpp",description:"Выбираем опорный элемент как медиану первого, среднего и последнего. Два указателя разделяют меньшие и большие значения, затем сортируем обе части.",note:"Исправленная адаптация hour из quick_sort.cpp. В оригинале смешаны включительная и исключительная правая граница; здесь границы включительные, а вызов заканчивается на n − 1.",pseudocode:`quickSort(left, right):
  если left ≥ right: выход
  pivot ← медиана(a[left], a[mid], a[right])
  i ← left; j ← right
  пока i ≤ j:
    двигать i, пока a[i] < pivot
    двигать j, пока a[j] > pivot
    если i ≤ j: обменять; i++; j--
  quickSort(left, j); quickSort(i, right)`,code:N+`void quick_sort(vector<int>& a, int l, int r) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    if (a[l] > a[m]) swap(a[l], a[m]);
    if (a[r] < a[l]) swap(a[l], a[r]);
    if (a[m] > a[r]) swap(a[m], a[r]);
    int pivot = a[m], i = l, j = r;
    while (i <= j) {
        while (a[i] < pivot) ++i;
        while (a[j] > pivot) --j;
        if (i <= j) { swap(a[i], a[j]); ++i; --j; }
    }
    if (l < j) quick_sort(a, l, j);
    if (i < r) quick_sort(a, i, r);
}
// Вызов: quick_sort(a, 0, int(a.size()) - 1);`},{id:"counting",name:"Подсчётом",short:"Counting sort",best:"O(n + k)",average:"O(n + k)",worst:"O(n + k)",space:"O(k)",stable:"Порядок объектов не сохраняется",file:"counting_sort.cpp",description:"Находим диапазон целых значений и считаем, сколько раз встречается каждое число. Затем восстанавливаем массив по счётчикам. k = max − min + 1.",note:"Адаптация counting_sort.cpp с проверкой пустого массива и ограничением диапазона. Код оригинала уже использует +1, хотя старый комментарий утверждает обратное. Сравнения учитывают поиск min/max.",pseudocode:`если массив пуст: выход
min, max ← границы массива
count[0 … max − min] ← 0
для каждого x: count[x − min]++
для каждого значения v по возрастанию:
  записать v ровно count[v − min] раз`,code:N+`#include <stdexcept>
void counting_sort(vector<int>& a) {
    if (a.empty()) return;
    auto bounds = minmax_element(a.begin(), a.end());
    int lo = *bounds.first, hi = *bounds.second;
    long long range = 1LL + hi - lo;
    if (range > 4096) throw invalid_argument("range too large");
    vector<int> count(static_cast<size_t>(range), 0);
    for (int x : a) ++count[x - lo];
    size_t pos = 0;
    for (size_t i = 0; i < count.size(); ++i)
        while (count[i]-- > 0) a[pos++] = int(i) + lo;
}`},{id:"selection",name:"Выбором",short:"Selection sort",best:"O(n²)",average:"O(n²)",worst:"O(n²)",space:"O(1)",stable:"Нет",file:"insertion_sort.cpp",description:"На каждом проходе находим минимальный элемент в неотсортированной части и ставим его на ближайшую свободную позицию слева.",note:"В репозитории файл называется insertion_sort.cpp, но функция внутри — selection_sort. В каталоге использовано фактическое название алгоритма.",pseudocode:`для i от 0 до n − 1:
  minIndex ← i
  для j от i до n − 1:
    если a[j] < a[minIndex]: minIndex ← j
  обменять a[i] и a[minIndex]`,code:N+`void selection_sort(vector<int>& a) {
    for (size_t i = 0; i < a.size(); ++i) {
        size_t smallest = i;
        for (size_t j = i; j < a.size(); ++j)
            if (a[j] < a[smallest]) smallest = j;
        swap(a[i], a[smallest]);
    }
}`},{id:"exchange",name:"Обменами из репозитория",short:"All-pairs exchange",best:"O(n²)",average:"O(n²)",worst:"O(n²)",space:"O(1)",stable:"Нет",file:"bubble_sort.cpp",description:"Для каждой позиции сравниваем её со всеми позициями массива. Если текущее значение меньше сравниваемого, меняем их местами. Получаем возрастающий порядок.",note:"Это точная логика bubble_sort.cpp, но сравниваются любые пары, а не соседи. Поэтому здесь она честно названа сортировкой обменами. Классический пузырёк показан отдельно.",pseudocode:`для i от 0 до n − 1:
  для j от 0 до n − 1:
    если a[i] < a[j]:
      обменять a[i] и a[j]`,code:N+`void exchange_sort(vector<int>& a) {
    for (size_t i = 0; i < a.size(); ++i)
        for (size_t j = 0; j < a.size(); ++j)
            if (a[i] < a[j]) swap(a[i], a[j]);
}`},{id:"bubble",name:"Пузырьком",short:"Bubble sort",best:"O(n)",average:"O(n²)",worst:"O(n²)",space:"O(1)",stable:"Да",description:"Сравниваем соседей и меняем их местами, если левый больше. Максимум постепенно перемещается в конец. Если обменов не было, работа закончена.",note:"Дополнительный учебный пример M3103 Hub. Это классический пузырёк с ранним выходом; он отличается от bubble_sort.cpp в исходном репозитории.",pseudocode:`для end от n − 1 до 1:
  changed ← false
  для j от 0 до end − 1:
    если a[j] > a[j+1]:
      обменять соседей; changed ← true
  если не changed: выход`,code:N+`void bubble_sort(vector<int>& a) {
    for (int end = int(a.size()) - 1; end > 0; --end) {
        bool changed = false;
        for (int j = 0; j < end; ++j)
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]); changed = true;
            }
        if (!changed) return;
    }
}`},{id:"insertion",name:"Вставками",short:"Insertion sort",best:"O(n)",average:"O(n²)",worst:"O(n²)",space:"O(1)",stable:"Да",description:"Поддерживаем отсортированную левую часть. Берём следующий элемент и сдвигаем все большие значения вправо, освобождая ему место.",note:"Дополнительная реализация M3103 Hub. Сортировка вставками описана в README исходника, но файл insertion_sort.cpp содержит сортировку выбором.",pseudocode:`для i от 1 до n − 1:
  key ← a[i]; j ← i − 1
  пока j ≥ 0 и a[j] > key:
    a[j+1] ← a[j]; j--
  a[j+1] ← key`,code:N+`void insertion_sort(vector<int>& a) {
    for (int i = 1; i < int(a.size()); ++i) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j]; --j;
        }
        a[j + 1] = key;
    }
}`}];function jr(t){const m=t.trim().split(/[\s,;]+/).filter(Boolean);if(m.length<2||m.length>40)throw new Error("Введите от 2 до 40 целых чисел.");if(m.some(x=>!/^-?\d+$/.test(x)))throw new Error("Используйте целые числа, разделённые пробелом или запятой.");const n=m.map(Number);if(n.some(x=>!Number.isSafeInteger(x)||x<-99||x>999))throw new Error("Каждое число должно быть от −99 до 999.");return n}function K(t,m){if(m.length>40||m.some(a=>!Number.isSafeInteger(a)||Math.abs(a)>1e6))throw new Error("Массив должен содержать до 40 безопасных целых чисел от −1000000 до 1000000.");if(t==="counting"&&m.length&&Math.max(...m)-Math.min(...m)+1>4096)throw new Error("Для сортировки подсчётом диапазон ограничен 4096 значениями.");const n=[...m],x=[];let f=0,v=0,y=0;const j=(a,i,s=[],c=[])=>x.push({values:[...n],active:[...s],changed:[...c],comparisons:f,swaps:v,writes:y,message:i,kind:a}),u=(a,i,s)=>{f++,j("compare",`Сравниваем ${n[a]} и ${n[i]}`,[a,i])},b=(a,i)=>{if(a===i)return;const s=n[a],c=n[i];[n[a],n[i]]=[n[i],n[a]],v++,y+=2,j("swap",`Меняем местами ${s} и ${c}`,[],[a,i])},_=(a,i)=>{n[a]=i,y++,j("write",`Записываем ${i} в позицию ${a+1}`,[],[a])};if(j("initial","Массив готов. Запустите сортировку или выполните один шаг."),t==="exchange")for(let a=0;a<n.length;a++)for(let i=0;i<n.length;i++)u(a,i),n[a]<n[i]&&b(a,i);else if(t==="selection")for(let a=0;a<n.length;a++){let i=a;for(let s=a;s<n.length;s++)u(s,i),n[s]<n[i]&&(i=s);b(a,i)}else if(t==="bubble")for(let a=n.length-1;a>0;a--){let i=!1;for(let s=0;s<a;s++)u(s,s+1),n[s]>n[s+1]&&(b(s,s+1),i=!0);if(!i)break}else if(t==="insertion")for(let a=1;a<n.length;a++){const i=n[a];let s=a-1;for(;s>=0&&(f++,j("compare",`Сравниваем ${n[s]} с выбранным значением ${i}`,[s]),!(n[s]<=i));)_(s+1,n[s]),s--;_(s+1,i)}else if(t==="merge"){const a=(i,s)=>{if(s-i<=1)return;const c=i+Math.floor((s-i)/2);a(i,c),a(c,s);const l=[];let o=i,d=c;for(;o<c&&d<s;)u(o,d),l.push(n[o]<=n[d]?n[o++]:n[d++]);for(;o<c;)l.push(n[o++]);for(;d<s;)l.push(n[d++]);l.forEach((w,T)=>_(i+T,w))};a(0,n.length)}else if(t==="quick"){const a=(i,s)=>{if(i>=s)return;const c=i+Math.floor((s-i)/2);u(i,c),n[i]>n[c]&&b(i,c),u(s,i),n[s]<n[i]&&b(i,s),u(c,s),n[c]>n[s]&&b(c,s);const l=n[c];let o=i,d=s;for(j("visit",`Опорное значение ${l}; диапазон ${i+1}–${s+1}`,[c]);o<=d;){for(;o<=s&&(f++,j("compare",`Сравниваем ${n[o]} < ${l} (опорное)`,[o]),!(n[o]>=l));)o++;for(;d>=i&&(f++,j("compare",`Сравниваем ${n[d]} > ${l} (опорное)`,[d]),!(n[d]<=l));)d--;o<=d&&(b(o,d),o++,d--)}i<d&&a(i,d),o<s&&a(o,s)};a(0,n.length-1)}else if(t==="counting"&&n.length){let a=n[0],i=n[0];for(let l=1;l<n.length;l++)f++,j("compare",`Сравниваем ${n[l]} с минимумом ${a}`,[l]),a=Math.min(a,n[l]),f++,j("compare",`Сравниваем ${n[l]} с максимумом ${i}`,[l]),i=Math.max(i,n[l]);const s=Array(i-a+1).fill(0);n.forEach((l,o)=>{s[l-a]++,j("visit",`Число ${l}: количество ${s[l-a]}`,[o])});let c=0;s.forEach((l,o)=>{for(let d=0;d<l;d++)_(c++,o+a)})}return j("done","Готово — массив отсортирован по возрастанию."),x}const W=[38,14,61,27,83,9,45,72,20,54,33,68];function X({frame:t,compact:m=!1}){const n=Math.min(0,...t.values),x=Math.max(1,...t.values);return r.jsx("div",{className:`sorting-bars${m?" compact":""}`,role:"img","aria-label":`Массив: ${t.values.join(", ")}. ${t.message}`,children:t.values.map((f,v)=>r.jsxs("div",{className:"sorting-bar-slot",children:[r.jsx("div",{className:`sorting-bar ${t.kind==="done"?"done":t.changed.includes(v)?"changed":t.active.includes(v)?"active":""}`,style:{height:`${18+(f-n)/(x-n||1)*82}%`},children:r.jsx("span",{children:f})}),!m&&r.jsx("small",{children:v+1})]},v))})}function Y({frame:t}){return r.jsxs("div",{className:"sorting-metrics",children:[r.jsxs("span",{children:[r.jsx("b",{children:t.comparisons})," сравнений"]}),r.jsxs("span",{children:[r.jsx("b",{children:t.swaps})," обменов"]}),r.jsxs("span",{children:[r.jsx("b",{children:t.writes})," записей"]})]})}function ur(){const[t,m]=g.useState("merge"),[n,x]=g.useState(W),[f,v]=g.useState(W.join(", ")),[y,j]=g.useState(""),[u,b]=g.useState(0),[_,a]=g.useState(!1),[i,s]=g.useState(5),[c,l]=g.useState("visualizer"),[o,d]=g.useState("cpp"),[w,T]=g.useState(["merge","quick","selection"]),[D,M]=g.useState(0),[$,E]=g.useState(!1),p=R.find(e=>e.id===t),z=g.useMemo(()=>K(t,n),[t,n]),L=z[Math.min(u,z.length-1)],F=g.useMemo(()=>w.map(e=>({algorithm:R.find(h=>h.id===e),frames:K(e,n)})),[w,n]),I=Math.max(...F.map(e=>e.frames.length)),k=u>=z.length-1,O=D>=I-1,A=1250-i*115;g.useEffect(()=>{if(!_||k)return;const e=window.setTimeout(()=>b(h=>Math.min(h+1,z.length-1)),A);return()=>window.clearTimeout(e)},[_,k,u,A,z.length]),g.useEffect(()=>{if(!$||O)return;const e=window.setTimeout(()=>M(h=>Math.min(h+1,I-1)),A);return()=>window.clearTimeout(e)},[$,O,D,A,I]);function C(){a(!1),E(!1),b(0),M(0)}function q(e){C(),x(e),v(e.join(", ")),j("")}function P(){try{q(jr(f))}catch(e){j(e.message)}}function Z(e){C(),m(e),d("cpp")}function J(e){E(!1),M(0),T(h=>h.includes(e)?h.length>2?h.filter(rr=>rr!==e):h:h.length<3?[...h,e]:h)}const U=gr(p);return r.jsxs("section",{className:"sorting-workspace","aria-label":"Инструмент изучения сортировок",children:[r.jsxs("div",{className:"sorting-hero",children:[r.jsxs("div",{children:[r.jsxs("span",{className:"sorting-overline",children:[r.jsx(nr,{size:14})," АЛГОРИТМЫ В ДВИЖЕНИИ"]}),r.jsx("h2",{children:"Понять, как устроен порядок."}),r.jsx("p",{children:"Меняйте массив, наблюдайте за каждым шагом и сравнивайте подходы."})]}),r.jsxs("span",{className:"sorting-count",children:["7 алгоритмов ",r.jsx("span",{children:"·"})," C++"]})]}),r.jsxs("div",{className:"sorting-view-switch",role:"group","aria-label":"Режим инструмента",children:[r.jsxs("button",{className:c==="visualizer"?"selected":"","aria-pressed":c==="visualizer",onClick:()=>{C(),l("visualizer")},children:[r.jsx(H,{size:15})," Визуализация"]}),r.jsxs("button",{className:c==="compare"?"selected":"","aria-pressed":c==="compare",onClick:()=>{C(),l("compare")},children:[r.jsx(cr,{size:16})," Сравнение алгоритмов"]})]}),r.jsxs("div",{className:"sorting-input-panel",children:[r.jsxs("label",{htmlFor:"sorting-array",children:["Исходный массив ",r.jsx("small",{children:"2–40 целых чисел, от −99 до 999"})]}),r.jsxs("div",{children:[r.jsx("input",{id:"sorting-array",value:f,onChange:e=>v(e.target.value),onKeyDown:e=>{e.key==="Enter"&&P()},"aria-invalid":!!y,"aria-describedby":y?"sorting-input-error":void 0}),r.jsxs("button",{onClick:P,children:["Применить ",r.jsx(lr,{size:14})]}),r.jsx("button",{onClick:()=>q(Array.from({length:n.length},()=>Math.floor(Math.random()*90)+5)),"aria-label":"Случайный массив",children:r.jsx(dr,{size:16})})]}),r.jsxs("div",{className:"sorting-presets",children:[r.jsx("span",{children:"Попробуйте"}),r.jsx("button",{onClick:()=>q([...n].sort((e,h)=>e-h)),children:"По возрастанию"}),r.jsx("button",{onClick:()=>q([...n].sort((e,h)=>h-e)),children:"Обратный порядок"}),r.jsx("button",{onClick:()=>q([28,14,28,42,14,28,7,42,7,14,28,7]),children:"С повторениями"})]}),y&&r.jsx("p",{id:"sorting-input-error",className:"sorting-error",role:"alert",children:y})]}),c==="visualizer"?r.jsxs("div",{className:"sorting-layout",children:[r.jsxs("aside",{className:"sorting-catalog","aria-label":"Каталог сортировок",children:[r.jsx("p",{className:"sorting-section-label",children:"КАТАЛОГ"}),R.map(e=>r.jsxs("button",{className:t===e.id?"selected":"",onClick:()=>Z(e.id),"aria-pressed":t===e.id,children:[r.jsxs("span",{children:[r.jsx("b",{children:e.name}),r.jsx("small",{children:e.short})]}),r.jsx("span",{className:"sorting-catalog-source",children:e.file?"репо":"доп."})]},e.id)),r.jsx("p",{className:"sorting-catalog-note",children:"Пять реализаций основаны на исходном репозитории. Два дополнительных примера отмечены отдельно."})]}),r.jsxs("div",{className:"sorting-main",children:[r.jsxs("div",{className:"sorting-visual-panel",children:[r.jsxs("div",{className:"sorting-panel-head",children:[r.jsxs("div",{children:[r.jsx("span",{className:"sorting-section-label",children:p.short}),r.jsx("h3",{children:p.name})]}),r.jsx("span",{className:"sorting-complexity",children:p.average})]}),r.jsx(X,{frame:L}),r.jsxs("div",{className:"sorting-legend",children:[r.jsxs("span",{children:[r.jsx("i",{className:"compare"})," Сравнение"]}),r.jsxs("span",{children:[r.jsx("i",{className:"swap"})," Обмен / запись"]}),r.jsxs("span",{children:[r.jsx("i",{className:"complete"})," Готово"]})]}),r.jsx("div",{className:"sorting-progress",children:r.jsx("div",{style:{width:`${u/(z.length-1)*100}%`}})}),r.jsxs("div",{className:"sorting-status",role:"status","aria-live":_&&!k?"off":"polite",children:[r.jsxs("span",{children:[k&&r.jsx(V,{size:16})," ",L.message]}),r.jsxs("small",{children:[u," / ",z.length-1]})]}),r.jsxs("div",{className:"sorting-controls",children:[r.jsxs("button",{className:"primary",onClick:()=>{k&&b(0),a(!_||k)},children:[_&&!k?r.jsx(G,{size:16}):r.jsx(H,{size:16})," ",_&&!k?"Пауза":k?"Ещё раз":u?"Продолжить":"Запустить"]}),r.jsxs("button",{onClick:()=>{a(!1),b(e=>Math.min(e+1,z.length-1))},disabled:k,children:[r.jsx(Q,{size:16})," Шаг"]}),r.jsx("button",{onClick:C,"aria-label":"Сбросить сортировку",children:r.jsx(B,{size:16})}),r.jsxs("label",{className:"sorting-speed",htmlFor:"sorting-speed",children:["Скорость ",r.jsx("input",{id:"sorting-speed",type:"range",min:"1",max:"10",value:i,onChange:e=>s(Number(e.target.value))}),r.jsxs("span",{children:[i,"/10"]})]})]}),r.jsx(Y,{frame:L})]}),r.jsxs("div",{className:"sorting-explanation",children:[r.jsx("h3",{children:"Как это работает"}),r.jsx("p",{children:p.description}),r.jsxs("div",{className:"sorting-properties",children:[r.jsxs("div",{children:[r.jsx("small",{children:"Лучший случай"}),r.jsx("b",{children:p.best})]}),r.jsxs("div",{children:[r.jsx("small",{children:"В среднем"}),r.jsx("b",{children:p.average})]}),r.jsxs("div",{children:[r.jsx("small",{children:"Худший случай"}),r.jsx("b",{children:p.worst})]}),r.jsxs("div",{children:[r.jsx("small",{children:"Доп. память алгоритма"}),r.jsx("b",{children:p.space})]})]}),r.jsxs("p",{className:"sorting-stability",children:["Устойчивость: ",r.jsx("b",{children:p.stable})]})]}),r.jsxs("div",{className:"sorting-source-note",children:[r.jsx(er,{size:18}),r.jsxs("div",{children:[r.jsx("b",{children:p.file?"Основано на материалах группы":"Дополнительный учебный пример"}),r.jsx("p",{children:p.note}),p.file&&r.jsxs("a",{href:mr(p.file),target:"_blank",rel:"noreferrer",children:[p.file," · 11b6fc7 ",r.jsx(ir,{size:12})]})]})]}),r.jsxs("div",{className:"sorting-code-panel",children:[r.jsxs("div",{className:"sorting-code-tabs",role:"group","aria-label":"Представление алгоритма",children:[r.jsx("button",{className:o==="cpp"?"selected":"","aria-pressed":o==="cpp",onClick:()=>d("cpp"),children:"C++ · адаптация"}),r.jsx("button",{className:o==="pseudo"?"selected":"","aria-pressed":o==="pseudo",onClick:()=>d("pseudo"),children:"Псевдокод"}),U&&r.jsx("button",{className:o==="original"?"selected":"","aria-pressed":o==="original",onClick:()=>d("original"),children:"Оригинальный C++"})]}),o==="original"&&r.jsx("p",{className:"sorting-original-warning",children:"Подлинный файл из репозитория, включая авторские комментарии и известные ошибки. Для изучения исправлений используйте адаптацию."}),r.jsx("pre",{tabIndex:0,children:r.jsx("code",{children:o==="pseudo"?p.pseudocode:o==="original"?U:p.code})})]})]})]}):r.jsxs("div",{className:"sorting-comparison",children:[r.jsxs("div",{className:"sorting-compare-picker",children:[r.jsx("h3",{children:"Один массив. Разные подходы."}),r.jsx("p",{children:"Выберите 2–3 алгоритма. Каждый такт выполняет одно событие; это сравнение операций, а не времени исполнения."}),r.jsx("div",{children:R.map(e=>r.jsxs("label",{children:[r.jsx("input",{type:"checkbox",checked:w.includes(e.id),disabled:w.includes(e.id)?w.length<=2:w.length>=3,onChange:()=>J(e.id)}),e.name]},e.id))})]}),r.jsxs("div",{className:"sorting-controls",children:[r.jsxs("button",{className:"primary",onClick:()=>{O&&M(0),E(!$||O)},children:[$&&!O?r.jsx(G,{size:16}):r.jsx(H,{size:16})," ",$&&!O?"Пауза":O?"Ещё раз":D?"Продолжить":"Сравнить"]}),r.jsxs("button",{onClick:()=>{E(!1),M(e=>Math.min(e+1,I-1))},disabled:O,children:[r.jsx(Q,{size:16})," Шаг"]}),r.jsx("button",{onClick:C,"aria-label":"Сбросить сравнение",children:r.jsx(B,{size:16})}),r.jsxs("label",{className:"sorting-speed",htmlFor:"sorting-compare-speed",children:["Скорость ",r.jsx("input",{id:"sorting-compare-speed",type:"range",min:"1",max:"10",value:i,onChange:e=>s(Number(e.target.value))}),r.jsxs("span",{children:[i,"/10"]})]})]}),r.jsx("div",{className:"sorting-comparison-grid",children:F.map(e=>{const h=e.frames[Math.min(D,e.frames.length-1)];return r.jsxs("article",{className:"sorting-compare-card",children:[r.jsxs("div",{className:"sorting-panel-head",children:[r.jsx("h3",{children:e.algorithm.name}),h.kind==="done"&&r.jsxs("span",{className:"sorting-finished",children:[r.jsx(V,{size:14})," Готово"]})]}),r.jsx(X,{frame:h,compact:!0}),r.jsx(Y,{frame:h}),r.jsx("p",{children:h.message}),r.jsx("small",{children:e.algorithm.file?e.algorithm.file:"Дополнительный пример"})]},e.algorithm.id)})}),r.jsx("div",{className:"sorting-table-wrap",children:r.jsxs("table",{children:[r.jsx("caption",{children:"Сложность выбранных алгоритмов"}),r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Алгоритм"}),r.jsx("th",{children:"Лучший"}),r.jsx("th",{children:"Средний"}),r.jsx("th",{children:"Худший"}),r.jsx("th",{children:"Доп. память"})]})}),r.jsx("tbody",{children:F.map(({algorithm:e})=>r.jsxs("tr",{children:[r.jsx("th",{children:e.name}),r.jsx("td",{children:e.best}),r.jsx("td",{children:e.average}),r.jsx("td",{children:e.worst}),r.jsx("td",{children:e.space})]},e.id))})]})})]}),r.jsx("p",{className:"sorting-methodology",children:"Счётчики: сравнения значений, обмены разных позиций и записи в основной массив. Записи во временные буферы не считаются. Высота столбцов нормирована для текущего диапазона; точные значения указаны на них. Память в справке относится к алгоритму, без сохранённых кадров анимации."})]})}function xr(){return r.jsxs("div",{className:"material-tool",children:[r.jsxs(ar,{className:"subject-back",href:"/files",children:[r.jsx(sr,{size:16}),"Все материалы"]}),r.jsxs("div",{className:"material-tool-breadcrumb",children:[r.jsx(tr,{size:15}),"Материалы",r.jsx(or,{size:14}),r.jsx("span",{children:"Сортировки"})]}),r.jsx(ur,{})]})}export{xr as default};
