<template>
    <Layout :light="false">
        <div class="my-24 w-10/12 lg:w-8/12 xl:w-7/12 xl:px-8 mx-auto">
            <div v-html="$page.content.content"></div>
            <ul>
                <li class="flex items-start" v-for="{ content } in $page.content.list" :key="content">
                    <g-image src="~/assets/img/bullet.svg" class="mt-2" />
                    <span class="ml-6">
                        {{ content }}
                    </span>
                </li>
            </ul>
            <h1>CHANGES TO OUR PRIVACY POLICY</h1>
            <p>
                We reserve the right to modify this Notice at any time. Any changes We may make to our Notice in the
                future will be notified and made available to you using the page. Your continued use of the page shall
                be deemed your acceptance of the varied Privacy Notice.
            </p>
        </div>
    </Layout>
</template>

<page-query>
query {
  content: privacyPolicyPage(id: 1){
    id
    list{
      content
    }
    content
  }
}
</page-query>

<script>
export default {}
</script>

<style scoped></style>
