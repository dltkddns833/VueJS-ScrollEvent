<template>
    <div class="intro_container">
        <div>
            <h1>올인원 채용 솔루션</h1>
            <h1>v-cube</h1>
            <h2>접수부터 서류심사, 화상면접, 합격자 발표까지<br/>채용 전반의 모든 과정을 v-cube와 함께하세요.</h2>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style>
.intro_container{
    height: 85vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url('../../assets/intro_back.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
}

.intro_container > div{
    width: 50%;
    height: 50%;
}

.intro_image{
    transform: scaleX(-1);
}
</style>