#!/usr/bin/env node

const { mkdir, appendFile, writeFile } = require('node:fs/promises')
const { resolve, join } = require('node:path')
const program = require('commander')

program
    .version('1.0.0')
    .description('Simple cli commands to generate components and views in vue projects')

program
    .command('dir')
    .action(() => { console.log(process.cwd()) })

program
    .command('cmp')
    .alias('c')
    .argument('<string>')
    .action((cmpName) => { generateCmp(cmpName) })

program
    .command('view')
    .alias('v')
    .argument('<string>')
    .action((viewName) => { generateView(viewName) })

program.parse(process.argv)

async function generateCmp(cmpName) {
    console.log(process.cwd())
    const cmpPath = join(process.cwd(), 'src', 'components', cmpName)
    const styleImport = `@import '${join('.', 'components', cmpName, `${cmpName}.scss`)}'`

    try {
        await mkdir(cmpPath, { recursive: true })
        await appendFile(join(`${cmpPath}`, `${cmpName}.vue`), getTemplate(cmpName))
        await appendFile(join(`${cmpPath}`, `${cmpName}.scss`), `.${cmpName}{}`)
        await appendFile(join(process.cwd(), 'src', 'style.scss'), '\n' + styleImport + ';')
        console.info('New component created')
    }
    catch (err) {
        console.error(err)
    }
}

async function generateView(viewName) {
    const cmpPath = join(process.cwd(), 'src', 'views', viewName)
    const styleImport = `@import '${join('.', 'views', viewName, `${viewName}.scss`)}'`

    try {
        await mkdir(cmpPath, { recursive: true })
        await appendFile(join(`${cmpPath}`, `${viewName}.vue`), getTemplate(viewName))
        await appendFile(join(`${cmpPath}`, `${viewName}.scss`), `.${viewName}{}`)
        await appendFile(join(process.cwd(), 'src', 'style.scss'), '\n' + styleImport + ';')
        console.info('New view created')
    }
    catch (err) {
        console.error(err)
    }
}

function getTemplate(cmpName) {
    return `<template>

</template>
    
<script>
export default {
    name: '${cmpName}',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    created() {
        
    },
    components: {

    },
}
</script>

<style>

</style>`
}