"""def solution(num):
    n=[0]
    for i in range (1,num+1):
        n.insert(i,n[i//2]+i%2)
    return n

num=int(input("Enter the number: "))
x=solution(num)
print(x)"""
class solution:
    def countbits(num):
        ans=[0]
        for i in range (1,num+1):
            ans.insert(i,ans[i//2]+i%2)
        return ans
    num=2
    print(countbits(num))

