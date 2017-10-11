var app1 = new Vue({
    el: '#app',
    data: {
        message: '页面加载于' + new Date().toLocaleTimeString(),
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue.js!'
    }
});

//子组件todo-item的声明，props数组中加入 todo属性，以便子组件中可以访问todo的数据
Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

//父组件包含列表数据
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id : 0, text : '蔬菜' },
            { id : 1, text : '奶酪' },
            { id : 2, text : '其他' }
        ]
    }
});

var vm1 = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    //计算属性
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {

    }
});

//watch版本
var vm2 = new Vue({
    el: '#demo-name-1',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    //观察属性，观察data中数据的变化，执行回调函数
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName;
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val;
        }
    }
});

//computed计算属性版本
var vm3 = new Vue({
    el: '#demo-name-2',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            get: function () {//getter
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newName) {//setter函数，fullName = 'xx xx'调用此setter函数
                var names = newName.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length-1];
            }
        }
    }
});

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // 如果 question 发生改变，这个函数就会运行
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.getAnswer();
        }
    },
    methods: {
        getAnswer: function () {

        }
    }
});

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
});

var vForObject = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert('Hello'+this.name+'!');
            if (event){//原生DOM事件event
                alert(event.target.tagName);
            }
        }
    }
});

var demoSelectFor = new Vue({
    el: '#demo-select-for',
    data: {
        selected: null,
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
});

//局部注册组件，仅在parent中使用该组件
var Child = {
    template: '<div>A custom component</div>'
};

var parent = new Vue({
    components: {
        'my-component': Child
    }
});

//组件: data必须为函数

Vue.component('simple-counter',{
    template: '<button v-on:click="counter += 1">{{counter}}</button>',
    data: function () {
        return {
            counter:0
        };
    }
});

new Vue({
    el: '#example-button'
});

//prop 向下传递，事件向上传递

Vue.component('child',{
    // 声明 props
    props: ['message'],
    // 就像 data 一样，prop 也可以在模板中使用
    // 同样也可以在 vm 实例中通过 this.message 来使用
    template: '<span>{{message}}</span>'
});

/*使用v-on绑定自定义事件
每个 Vue 实例都实现了事件接口，即：
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件
*/
Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{counter}}</button>',
    data: function () {
        return {
            counter : 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1;
            this.$emit('increment');//触发increment事件，调用incrementTotal()函数
        }
    }
});

new Vue({
    el: '#counter-event-example',
    data: {
        total : 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1;
        }
    }
});