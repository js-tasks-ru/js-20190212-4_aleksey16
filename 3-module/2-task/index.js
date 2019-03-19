let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = new Date(this.from);
    let last = this.to;

    return {
        next() {
            if (current <= last) {
                current.setDate(current.getDate() + 1);
                let s = current.getDate();
                s = (s<10)? '0'+s:''+s;

                if( current.getDay()==0 || current.getDay()==6){
                    return {
                        done: false,
                        value: '['+s+']'
                    };

                }else{
                    return {
                        done: false,
                        value: s
                    };
                }


            } else {
                return {
                    done: true
                };
            }
        }}
};