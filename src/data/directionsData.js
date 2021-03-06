import horeo from "../image/horeo.jpg";
import vokal from "../image/vokal.jpg";
import aktMast from "../image/aktMast.jpg";
import englishLang from "../image/englishLang.jpg";
import izo from "../image/izo.jpg";
import preSchool from "../image/preSchool.jpg";

const info = {
  artDirections: [
    {
      id: 1,
      name: "Хореография",
      routeName: "horeo",
      descr:
        "Танцы – оптимальный выбор для физического развития ребёнка в любом возрасте. Занятия хореографией развивают силу, ловкость, гибкость, координацию движений и чувство ритма, формируют походку и осанку, избавляют от стеснительности и зажатости. Танцы воспитывают в ребёнке с малых лет трудолюбие, целеустремленность, собранность, а также умение концентрироваться и запоминать.",
      url: horeo,
    },
    {
      id: 2,
      name: "Вокал",
      routeName: "vokal",
      descr:
        "Если одно из любимых занятий ребёнка – пение, то почему бы не развить его способности? Умение владеть своим голосом и уверенно держаться на сцене будет полезно абсолютно каждому! Занятия дадут возможность освоить правильную постановку дыхания, дикции и артикуляции, развить диапазон голоса и чувство ритма. Ещё один важный фактор: пение помогает преодолеть внутренние комплексы, а также улучшает настроение!",
      url: vokal,
    },
    {
      id: 3,
      name: "Актёрское мастерство",
      routeName: "actors",
      descr:
        "Такой вид творческой деятельности одинаково подходит всем детям: ведь в процессе обучения ребёнок получит навыки, которые пригодятся ему в будущем. Занятия по актёрскому мастерству помогают раскрепоститься, почувствовать себя увереннее, а также побороть боязнь выступлений перед публикой. Что не менее важно – это отличный способ выплеснуть эмоции и зарядиться положительной энергией! ",
      url: aktMast,
    },
    {
      id: 4,
      name: "Изостудия",
      routeName: "izo",
      descr:
        "Изостудия – это творческие занятия как для детей, так и для взрослых. Вас ждёт знакомство с множеством  живописных и графических техник, а также интересные эксперименты с художественными материалами. На занятиях мы будем рисовать, лепить, работать с бумагой и создавать классные работы своими руками! Обучение изобразительному искусству развивает фантазию и творческое мышление, улучшает память и внимание, а самое главное – прививает любовь к творчеству!",
      url: izo,
    },
  ],
  edDirections: [
    {
      id: 1,
      name: "Подготовка к школе",
      routeName: "school",
      descr:
        "Для родителей, которые желают подготовить своего ребёнка к новому этапу в его жизни, мы предлагаем развивающие занятия для дошкольников.  Программа направлена на обучение чтению, письму и счёту, развитие речи, логики и мышления, а также на подготовку руки к письму. Ученики будут развивать внимание, усидчивость, ответственность, самостоятельность и другие необходимые умения.",
      url: preSchool,
    },
    {
      id: 2,
      name: "Английский язык",
      routeName: "english",
      descr:
        "Если Вы хотите привить ребёнку интерес к изучению английского языка с раннего возраста – мы Вам в этом поможем! На занятиях ученики познакомятся со звуками и буквами английского языка, выучат слова по основным темам, научатся задавать вопросы и отвечать на них, а также рассказывать о себе, своей семье и игрушках. Обучение проходит в игровой форме с использованием аудио- и видеоматериалов для детей.",
      url: englishLang,
    },
  ],
};
export default info;
