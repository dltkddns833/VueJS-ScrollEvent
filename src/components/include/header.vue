<template>
    <div class="header_container">
        <b-navbar type="dark" variant="dark" class="justify-content-end v-cube_nav">
            <b-navbar-nav>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">전용 채용관</b-nav-item>
                        <b-nav-item href="#">기업 관리자</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar-nav>
        </b-navbar>
        <b-navbar toggleable="lg" type="light" variant="light" class="v-cube_nav">
            <b-navbar-brand href="#">
                <img src="../../assets/v-cube_logo.png" class="d-inline-block align-top" alt="v-cube">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="justify-content-end">
                <b-navbar-nav>
                    <b-nav-item href="#">v-cube 소개</b-nav-item>
                    <b-nav-item href="#">상품 소개</b-nav-item>
                    <b-nav-item href="#">이용기업</b-nav-item>
                    <b-nav-item href="#">FAQ</b-nav-item>
                    <b-nav-item href="#">서비스 문의</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
        
</template>


<script>
export default {
    
}
</script>

<style>
.header_container{
    position: relative;
}
.v-cube_nav{
    padding: 8px 24px;
}
</style>