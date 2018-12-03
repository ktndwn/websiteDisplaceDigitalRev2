




const offset = 309

let designLink = document.getElementById('design-link')
let motionLink = document.getElementById('motion-link')
let codeLink = document.getElementById('code-link')
let selfLink = document.getElementById('self-link')

let design = document.getElementById('design')
let motion = document.getElementById('motion')
let code = document.getElementById('code')
let self = document.getElementById('self')

let designScroll = design.offsetTop - offset
let motionScroll = motion.offsetTop - offset
let codeScroll = code.offsetTop - offset
let selfScroll = self.offsetTop - offset




designLink.addEventListener('click', scrollToDesign => {
    let designScroll = design.offsetTop - offset
    window.scroll ({
        top: designScroll,
        behavior: 'smooth'
    })
})
motionLink.addEventListener('click', scrollToMotion => {
    let motionScroll = motion.offsetTop - offset
    window.scroll ({
        top: motionScroll,
        behavior: 'smooth'
    })
})
codeLink.addEventListener('click', scrollToCode => {
    let codeScroll = code.offsetTop - offset
    window.scroll ({
        top: codeScroll,
        behavior: 'smooth'
    })
})
selfLink.addEventListener('click', scrollToAbout => {
    let selfScroll = self.offsetTop - offset
    window.scroll ({
        top: selfScroll,
        behavior: 'smooth'
    })
})






let linkColorCheck = () => {
    let designScroll = design.offsetTop - offset
    let motionScroll = motion.offsetTop - offset
    let codeScroll = code.offsetTop - offset
    let selfScroll = self.offsetTop - offset

    if (designScroll <= window.scrollY && window.scrollY < motionScroll) {
        designLink.classList.add('triggered')
        designLink.classList.remove('link')
    } else {
        designLink.classList.add('link')
        designLink.classList.remove('triggered')
    }
    if (motionScroll <= window.scrollY && window.scrollY < codeScroll) {
        motionLink.classList.add('triggered')
        motionLink.classList.remove('link')
    } else {
        motionLink.classList.add('link')
        motionLink.classList.remove('triggered')
    }
    if (codeScroll <= window.scrollY && window.scrollY < selfScroll) {
        codeLink.classList.add('triggered')
        codeLink.classList.remove('link')
    } else {
        codeLink.classList.add('link')
        codeLink.classList.remove('triggered')
    }
    if (selfScroll <= window.scrollY) {
        selfLink.classList.add('triggered')
        selfLink.classList.remove('link')
    } else {
        selfLink.classList.add('link')
        selfLink.classList.remove('triggered')
    }
}

window.addEventListener('scroll', linkColorCheck)

linkColorCheck()



