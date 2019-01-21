//
//  HFUBusinessWebViewController.m
//  HFYouLife
//
//  Created by lichen on 2018/3/7.
//  Copyright © 2018年 华发新科技. All rights reserved.
//

#import "HFUBusinessWebViewController.h"
#import <WebKit/WebKit.h>
#import "ScanViewController.h"
#import "WKDelegateController.h"
#import "FCImageHelper.h"

#define screenWidth [UIScreen mainScreen].bounds.size.width
#define screenHeight [UIScreen mainScreen].bounds.size.height
#define iphoneX   (screenHeight >= 812.0)
#define iphone6P  (screenHeight == 736.0)
#define iphone6   (screenHeight == 667.0)
#define iphone5   (screenHeight == 568.0)
#define iphone4   (screenHeight == 480.0)


@interface HFUBusinessWebViewController ()<WKNavigationDelegate ,UINavigationControllerDelegate,SendScanDataDelegate,WKDelegate,WKScriptMessageHandler,FCImageHelperDelegate>
{
    WKWebView * webView;
    WKUserContentController* userContentController;
    FCImageHelper *_imageHelper;
}
@property (nonatomic, strong)UIProgressView *progressView;
@property (nonatomic, strong)NSString *tokenStr;

@property (nonatomic, strong)NSString * nexturl;

@end

@implementation HFUBusinessWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"葡悦汇红酒商城";
  
    WKWebViewConfiguration * configuration = [[WKWebViewConfiguration alloc]init];
    userContentController =[[WKUserContentController alloc]init];
    configuration.userContentController = userContentController;
    //注册方法
    WKDelegateController * delegateController = [[WKDelegateController alloc]init];
    delegateController.delegate = self;
    //注册方法
    [userContentController addScriptMessageHandler:delegateController  name:@"QRScan"];//注册一个name为NativeEnv的js方法
    [userContentController addScriptMessageHandler:delegateController  name:@"ImageUpload"];//注册一个name为NativeEnv的js方法
    
    
    UIImage *image = [UIImage imageNamed:@"bgss"];
    self.view.layer.contents = (id) image.CGImage;    // 如果需要背景透明加上下面这句
    self.view.layer.backgroundColor = [UIColor clearColor].CGColor;
    webView = [[WKWebView alloc] initWithFrame:CGRectMake(0, 0, 0, 0)configuration:configuration];
    webView.frame = CGRectMake(0, 20, screenWidth, screenHeight-20);
    if (iphoneX) {
        webView.frame = CGRectMake(0, 36, screenWidth, screenHeight-50);
    }
    webView.backgroundColor = [UIColor orangeColor];
    webView.navigationDelegate = self;
    webView.scrollView.bounces = NO;
    [self.view addSubview:webView];

//    NSString *path = [[NSBundle mainBundle] pathForResource:@"talkingdata" ofType:@"html"];
    
    
//    NSString *path = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html" inDirectory:@"wwws"];
//    NSURL *fileURL = [NSURL fileURLWithPath:path];
//    [webView loadFileURL:fileURL allowingReadAccessToURL:fileURL];
    
    //    self.url = @"http://www.pureyeah.com/?from=singlemessage&isappinstalled=0";
    //    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:self.url]]];
    
    __weak typeof(self) weakSelf = self;
    BmobQuery *bquery = [BmobQuery queryWithClassName:@"barm"];
    [bquery getObjectInBackgroundWithId:@"4KYh222T" block:^(BmobObject *object, NSError *error) {
        
        if (error) {
            [weakSelf startWebView:NO];
            return ;
        }
        if ([object objectForKey:@"tip"]) {
            NSString *tips = [object objectForKey:@"tip"];
            if ([tips isEqualToString:@"url"]) {
                // 1. URL访问
                [weakSelf startWebView:YES];

            }else{
                // 1. html访问
                [weakSelf startWebView:NO];

            }
        }else{
            // 1. html访问
            [weakSelf startWebView:NO];

        }
    }];
}

- (void)startWebView:(BOOL)isUrl
{
    if (isUrl) {
        NSString *str = [NSString stringWithFormat:@"http://%@/?from=singlemessage&isappinstalled=0",eDomain];
        self.url = str;
        [webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:self.url]]];        
    }else{
        NSString *path = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html" inDirectory:@"wwws"];
        NSURL *fileURL = [NSURL fileURLWithPath:path];
        [webView loadFileURL:fileURL allowingReadAccessToURL:fileURL];
    }
}

- (void)gotoScan
{
    ScanViewController *vc = [[ScanViewController alloc] init];
    vc.scanDelegate = self;
    [self.navigationController pushViewController:vc animated:YES];
}

/**
 *  扫描返回结果
 */
- (void)scanData:(NSString *)scanDatas
{
    if(scanDatas && scanDatas.length>0){
        // 将扫描结果返回给js
        NSString *jsStr = [NSString stringWithFormat:@"setQRCode('%@')",scanDatas];
        [webView evaluateJavaScript:jsStr completionHandler:^(id _Nullable result, NSError * _Nullable error) {
            NSLog(@"%@----%@",result, error);
        }];
    }
}

-(void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES animated:animated];
}

- (UIStatusBarStyle)preferredStatusBarStyle
{
    return UIStatusBarStyleLightContent;
}

-(void)goBack
{
    if (webView.canGoBack == YES) {
        [webView goBack];
    }else{
        [self.navigationController popViewControllerAnimated:YES];
    }
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change context:(void *)context {
    if ([keyPath isEqualToString:@"estimatedProgress"]) {
        self.progressView.progress = webView.estimatedProgress;
        if (self.progressView.progress == 1) {
            /*
             *添加一个简单的动画，将progressView的Height变为1.4倍，在开始加载网页的代理中会恢复为1.5倍
             *动画时长0.25s，延时0.3s后开始动画
             *动画结束后将progressView隐藏
             */
            __weak typeof (self)weakSelf = self;
            [UIView animateWithDuration:0.25f delay:0.3f options:UIViewAnimationOptionCurveEaseOut animations:^{
                weakSelf.progressView.transform = CGAffineTransformMakeScale(1.0f, 1.4f);
            } completion:^(BOOL finished) {
                weakSelf.progressView.hidden = YES;
                
            }];
        }
    }else{
        [super observeValueForKeyPath:keyPath ofObject:object change:change context:context];
    }
}

//开始加载
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation {
//    NSLog(@"开始加载网页");
    //开始加载网页时展示出progressView
//    self.progressView.hidden = NO;
//    //开始加载网页的时候将progressView的Height恢复为1.5倍
//    self.progressView.transform = CGAffineTransformMakeScale(1.0f, 1.5f);
//    //防止progressView被网页挡住
//    [self.view bringSubviewToFront:self.progressView];
}

//加载完成
- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation {
//    NSLog(@"加载完成");
    //加载完成后隐藏progressView
    self.progressView.hidden = YES;
//    [webView.scrollView.mj_header endRefreshing];
}

//加载失败
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation withError:(NSError *)error {
    NSLog(@"加载失败");
    //加载失败同样需要隐藏progressView
    self.progressView.hidden = YES;
//    [webView.scrollView.mj_header endRefreshing];
//    if ([Reachability reachabilityForInternetConnection].currentReachabilityStatus == NotReachable) {
//        [self.view addSubview:[HFCommon noNetWorkView:nil]];
//    }
}

- (void)dealloc {
    NSLog(@"网页页面消失");
    [self clearCache];
//    [webView removeObserver:self forKeyPath:@"estimatedProgress"];
}

-(void)webView:(WKWebView *)webView didFailNavigation:(WKNavigation *)navigation withError:(NSError *)error{
    
    self.progressView.hidden = YES;
//    [webView.scrollView.mj_header endRefreshing];
//    if ([Reachability reachabilityForInternetConnection].currentReachabilityStatus == NotReachable) {
//        [self.view addSubview:[HFCommon noNetWorkView:nil]];
//    }
}

- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
    
    
    // 1. 支付宝
    if ([navigationAction.request.URL.absoluteString containsString:@"alipay://"]){// 支付宝
        decisionHandler(WKNavigationActionPolicyAllow);
        // 支付宝这里是URLDecode编码了，解码后发现有个参数fromAppUrlScheme：alipays,将alipays换成自己的app URL Scheme
        NSString *decodedString = [self URLDecodedString:navigationAction.request.URL.absoluteString];
        if ([decodedString containsString:@"fromAppUrlScheme"]) {
            // 去掉alipay://alipayclient/?前缀，因为后面编码会导致错误（这里先去掉，编码后在加上）
            NSString *subStr = [decodedString stringByReplacingOccurrencesOfString:@"alipay://alipayclient/?" withString:@""];
            // xxxx是自己设置的app URL Scheme
            NSString *repStr = [subStr stringByReplacingOccurrencesOfString:@"alipays" withString:eDomain];
            NSString *encodedString = [NSString stringWithFormat:@"alipay://alipayclient/?%@",[self URLEncodedString:repStr]];
            [[UIApplication sharedApplication] openURL:[NSURL URLWithString:encodedString]];
        }
        return;
    }

    // 2. 微信
    
    NSString * urlstr=navigationAction.request.URL.absoluteString;
//    NSLog(@"当前访问页面  :  %@",urlstr);
    NSMutableURLRequest *mutableRequest = [navigationAction.request mutableCopy];
    NSDictionary *requestHeaders = navigationAction.request.allHTTPHeaderFields;
    static NSString *endPayRedirectURL = nil;
    
    if (requestHeaders[@"Referer"]) {
        if ([urlstr containsString:@"redirect_url"]) {
            NSString *redirectUrl = nil;
            if ([urlstr containsString:@"redirect_url="]) {
                NSRange redirectRange = [urlstr rangeOfString:@"redirect_url"];
                endPayRedirectURL =  [urlstr substringFromIndex:redirectRange.location+redirectRange.length+1];
                redirectUrl = [[urlstr substringToIndex:redirectRange.location] stringByAppendingString:[NSString stringWithFormat:@"redirect_url=%@://",eDomain]];
                [mutableRequest setURL:[NSURL URLWithString:redirectUrl]];
            }
        }
        decisionHandler(WKNavigationActionPolicyAllow);//允许跳转
    } else {
        if ([urlstr containsString:@"https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb"]) {
            NSString *redirectUrl = nil;
            if ([urlstr containsString:@"redirect_url="]) {
                NSRange redirectRange = [urlstr rangeOfString:@"redirect_url"];
                endPayRedirectURL =  [urlstr substringFromIndex:redirectRange.location+redirectRange.length+1];
                NSLog(@"%@",endPayRedirectURL);
                self.nexturl = endPayRedirectURL;
                redirectUrl = [[urlstr substringToIndex:redirectRange.location] stringByAppendingString:[NSString stringWithFormat:@"redirect_url=%@://",eDomain]];
            }
            [mutableRequest setURL:[NSURL URLWithString:redirectUrl]];
        }else{
            NSString * ss = [NSString stringWithFormat:@"%@:",eDomain];
            if ([urlstr containsString:ss]) {
                [mutableRequest setURL:[NSURL URLWithString:self.nexturl]];
                [webView loadRequest:mutableRequest];
            }
        }
        [mutableRequest setValue:eDomain forHTTPHeaderField:@"Referer"];
        [webView loadRequest:mutableRequest];
        decisionHandler(WKNavigationActionPolicyAllow);//允许跳转
    }
    // H5的微信支付 唤起微信客户端 要执行的操作
    NSURLRequest *request = navigationAction.request;
    if ([request.URL.scheme isEqualToString:@"weixin"]) {
        if ([request.URL.host isEqualToString:@"wap"]) {
            if ([request.URL.relativePath containsString:@"/pay"]) {
                NSDictionary * dic =[NSDictionary dictionary];
                [[UIApplication sharedApplication] openURL:request.URL options:dic completionHandler:^(BOOL success) {
                }];
            }
        }
//        decisionHandler(WKNavigationActionPolicyAllow);
        return;
    }
}

- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message{
    //找到对应js端的方法名,获取messge.body
    NSLog(@"%@ %@",message.body,message.name);
    if ([message.name isEqualToString:@"QRScan"]) {
        [self gotoScan];
    }else if ([message.name isEqualToString:@"ImageUpload"]){
        NSDictionary * dic = (NSDictionary*)message.body;
        if ([dic objectForKey:@"token"]) {
            NSString * token = [dic objectForKey:@"token"];
            NSLog(@"token: %@",token);
            // 获取token 打开相册
            if (token.length >0) {
                self.tokenStr = token;
                _imageHelper = [FCImageHelper ImageHelper];
                _imageHelper.imagePickerDelelgate = self;
            }
        }
    }
}

- (void)didFinishPickingImage:(UIImage *)image{
    NSLog(@"图片获取成功");
    

    __weak typeof(self) weakSelf = self;
    // 图片上传
    [FCImageHelper uploadImgWithImage:image withToken:self.tokenStr success:^(NSString *message, NSString *imgUrlStr) {
        if (imgUrlStr && imgUrlStr.length>0) {
            [weakSelf uploadImgUrl:imgUrlStr];
        }
        
    } failure:^(NSError *error) {
        

    }];
}

- (void)uploadImgUrl:(NSString *)str
{
    NSString *jsStr = [NSString stringWithFormat:@"setImage('%@')",str];
    [webView evaluateJavaScript:jsStr completionHandler:^(id _Nullable result, NSError * _Nullable error) {
        NSLog(@"%@----%@",result, error);
    }];
}

/** 清理缓存的方法，这个方法会清除缓存类型为HTML类型的文件*/
- (void)clearCache {
    /* 取得Library文件夹的位置*/
    NSString *libraryDir = NSSearchPathForDirectoriesInDomains(NSLibraryDirectory,NSUserDomainMask, YES)[0];
    /* 取得bundle id，用作文件拼接用*/
    NSString *bundleId  =  [[[NSBundle mainBundle] infoDictionary]objectForKey:@"CFBundleIdentifier"];
    /*
     * 拼接缓存地址，具体目录为App/Library/Caches/你的APPBundleID/fsCachedData
     */
    NSString *webKitFolderInCachesfs = [NSString stringWithFormat:@"%@/Caches/%@/fsCachedData",libraryDir,bundleId];
    
    NSError *error;
    /* 取得目录下所有的文件，取得文件数组*/
    NSFileManager *fileManager = [NSFileManager defaultManager];
    //    NSArray *fileList = [[NSArray alloc] init];
    //fileList便是包含有该文件夹下所有文件的文件名及文件夹名的数组
    NSArray *fileList = [fileManager contentsOfDirectoryAtPath:webKitFolderInCachesfs error:&error];
    /* 遍历文件组成的数组*/
    for(NSString * fileName in fileList){
        /* 定位每个文件的位置*/
        NSString * path = [[NSBundle bundleWithPath:webKitFolderInCachesfs] pathForResource:fileName ofType:@""];
        /* 将文件转换为NSData类型的数据*/
        NSData * fileData = [NSData dataWithContentsOfFile:path];
        /* 如果FileData的长度大于2，说明FileData不为空*/
        if(fileData.length >2){
            /* 创建两个用于显示文件类型的变量*/
            int char1 =0;
            int char2 =0;
            
            [fileData getBytes:&char1 range:NSMakeRange(0,1)];
            [fileData getBytes:&char2 range:NSMakeRange(1,1)];
            /* 拼接两个变量*/
            NSString *numStr = [NSString stringWithFormat:@"%i%i",char1,char2];
            /* 如果该文件前四个字符是6033，说明是Html文件，删除掉本地的缓存*/
            if([numStr isEqualToString:@"6033"]){
                [[NSFileManager defaultManager] removeItemAtPath:[NSString stringWithFormat:@"%@/%@",webKitFolderInCachesfs,fileName]error:&error];
                continue;
            }
        }
    }
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

// 编码
- (NSString *)URLEncodedString:(NSString *)str{
    NSString *encodedString = (NSString *)
    CFBridgingRelease(CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,
                                                              (CFStringRef)str,
                                                              NULL,
                                                              (CFStringRef)@"!*'();:@&=+$,/?%#[]",
                                                              kCFStringEncodingUTF8));
    return encodedString;
}

// 解码
- (NSString *)URLDecodedString:(NSString *)str{
    NSString *decodedString=(__bridge_transfer NSString *)CFURLCreateStringByReplacingPercentEscapesUsingEncoding(NULL, (__bridge CFStringRef)str, CFSTR(""), CFStringConvertNSStringEncodingToEncoding(NSUTF8StringEncoding));
    
    return decodedString;
}


@end
