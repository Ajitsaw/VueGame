new Vue({
    el: '#app',
    data: {
        human: 100,
        covid: 100,
        startfight: 'start',
        isMask: true,
        isDistancing: false,
        isStanitizer: false,
        isImmunity: false,
        isAntidote: false,
        isHand: false,
        infoButtons: '',
        infoText: `
            <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
            <p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
            <p>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. </p>
            <p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
            <p>At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.</p>
        `
    },
    methods: {
        startButton: function() {
            this.startfight = 'continue';
            this.infoButtons = "If you Don't wear a mask you will definitely get sick",
            this.infoText = `
                <p>Two of the world's major health organisations disagree on mask wearing. The World Health Organisation (WHO) currently discourages mask use:</p>
                <p> There is currently no evidence that wearing a mask (whether medical or other types) by healthy persons in the wider community setting, including universal community masking, can prevent them from infection with respiratory viruses, including COVID-19.</p>
                <p>WHO does recommend special masks (N95 masks or equivalent) plus other protection for health-care workers working with people who have, or are suspected to have, COVID-19.</p>
                <p>By contrast, the Centres for Disease Control and Prevention (CDC) in the United States has recently recommended everyone wear a (cloth) mask. However, this is to prevent infected people passing on the infection, not to prevent the wearer getting infected.</p>
                <p>Who is right? Does wearing a mask protect the wearer? Does it protect others?</p>
            `
        },
        mask: function() {
           return this.human = 53, this.covid = 100,
           this.isMask = false,
           this.isDistancing = true,
           this.infoButtons = "To lose patience is to lose the battle.",
           this.infoText = `
                <p>COVID-19 spreads mainly among people who are in close contact (within about 6 feet) for a prolonged period. Spread happens when an infected person coughs, sneezes, or talks, and droplets from their mouth or nose are launched into the air and land in the mouths or noses of people nearby. The droplets can also be inhaled into the lungs. Recent studies indicate that people who are infected but do not have symptoms likely also play a role in the spread of COVID-19.</p>
                <p>It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or eyes. However, this is not thought to be the main way the virus spreads. COVID-19 can live for hours or days on a surface, depending on factors such as sunlight, humidity, and the type of surface. Social distancing helps limit opportunities to come in contact with contaminated surfaces and infected people outside the home.</p>
            `
        },
        socialDistancing: function() {
            return this.human = 49, this.covid = 71,
            this.isDistancing = false,
            this.isStanitizer = true,
            this.infoButtons = "Clean communities, healthy citizens.",
            this.infoText = `
                <p>Coronavirus (COVID-19), the new name for the disease being caused by the recent coronavirus, SARS-CoV-2 is all over the news. A lot of information is being presented about how help prevent Coronavirus (COVID-19) from affecting you and your family. Perhaps the most important thing to know is that medical experts agree on this: One of the best ways to stay healthy is to wash your hands with soap and water. But if those aren’t available, hand sanitizer may help rid your hands of unwanted germs.</p>
            `
        },
        stanitizer: function() {
            return this.human = 53, this.covid = 57,
            this.isStanitizer = false,
            this.isImmunity = true,
            this.infoButtons = "Sporting a six-pack doesn't necessarily mean that one is fit as it tends to reduce one's immunity levels.",
            this.infoText = `
                <p>Our immune system is the most important line of defence against various disease-causing microorganisms. It is programmed to identify and protect us from various types of threats. Many symptoms that we actually associate with the disease are the work of the immune system to wash out the germs from the body. The immune system sets out to destroy the microorganisms by triggering inflammation, mucous, sneezing, coughing and runny nose.</p>
                <p>As effective and brilliant as the immune system is in fighting diseases, it isn’t perfect, and as a result, it sometimes fails. Every now and then, a germ manages to invade our body successfully and makes us sick. Viruses enter our bodies predominantly via nose and mouth. Gradually, they move to the lower respiratory tract. They then disable the cell’s defence and spread to the adjacent cells and become a serious threat.</p>
            `
        },
        immunity: function() {
            return this.human = 75, this.covid = 46,
            this.isImmunity = false,
            this.isHand = true,
            this.infoButtons = "Dirty hands can no longer redeem in the hour of truth.",
            this.infoText = `
            <p>The single most important piece of advice health experts can give to help us stay safe from COVID-19 is this one: Wash your hands.</p>
            <p>Still, study researchers think their results make sense. Because foam washes off more quickly than gel soap, users are more likely to splash and dash after a dollop of foam.</p>
            <p>"People tend to wash their hands for a shorter duration with the foam soap," says Ozlem Equils, MD, president of an educational nonprofit called MiOra.</p>
            <p>What about bar soap? Numerous studies have found that bacteria can stay on bar soap that stays wet because it gets used frequently. But studies that have looked to see whether that's a problem show that the bacteria don't seem to transfer to the next user. If your bar looks slimy, rinse it off under water before you lather your hands, and try to store it so it will dry out between uses.</p>
            `
        },
        unwashedHand: function() {
            return this.human = 27, this.covid = 82,
            this.isAntidote = true,
            this.isHand = false,
            this.infoButtons = "Vaccines are safe, effective, and lifesaving.",
            this.infoText = `
                <p>The pandemic is a stark reminder of how fast an outbreak can spread without a vaccine to protect us. The science is clear. Vaccines are safe, effective and life-saving tools to control and prevent outbreaks of infectious diseases.</p>
                <p>No vaccine exists yet for COVID-19 and one that meets rigorous testing standards is many months away from a widespread roll out. When the vaccine becomes available it will depend on strong immunization services to reach the most vulnerable.</p>
            `
        },
        antidote: function() {
            return this.human = 100, this.covid = 0,
            setTimeout(() => {
                alert('So Mankind survived!'),
                this.startfight = 'start',
                this.human = 100,
                this.covid = 100,
                this.infoText = `
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                    <p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
                    <p>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. </p>
                    <p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
                    <p>At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.</p>
                `
            }, 500)
        }
    }
}) 